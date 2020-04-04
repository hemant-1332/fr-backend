from rest_framework.parsers import FileUploadParser
from rest_framework.response import Response
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from rest_framework import viewsets, permissions
from django.shortcuts import get_object_or_404
from rest_framework.decorators import action
from django.core.files.base import ContentFile
from django.core.files.uploadedfile import SimpleUploadedFile
import base64, uuid
from base64 import decodestring
import io
import os
from os.path import isdir, join, isfile, splitext
from os import listdir
from math import sqrt
from sklearn import neighbors
import cv2
from imutils import paths
from os import listdir
from os.path import join, isfile, splitext
import pickle
from PIL import Image, ImageFont, ImageDraw
import face_recognition
#from face_recognition import face_locations
from face_recognition.face_recognition_cli import image_files_in_folder
from imageio import imread
import json
import logging


from .serializers import FileSerializer, PersonSerializer, UnknownPersonSerializer, PlainTextParser
from .models import Person

MEDIA_FOLDER = os.path.basename('media')
video_capture = cv2.VideoCapture(0)
# Initialize some variables
face_locations = []
face_encodings = []
face_names = []
face_distances = []
process_this_frame = True
preds = []

MODEL_FOLDER = os.path.basename('models')
MODEL = os.path.join(MODEL_FOLDER,'mod.pickle')

logging = logging.getLogger(__name__)


DIST_THRESH = .5

def index(request,path=''):
    return render(request, 'index.html', {})


class FileUploadView(APIView):
    parser_class = (FileUploadParser,)

    def post(self, request, *args, **kwargs):

      file_serializer = FileSerializer(data=request.data)
      print('File uploading..: {}'.format(file_serializer))

      if file_serializer.is_valid():
          file_serializer.save()
          return Response(file_serializer.data, status=status.HTTP_201_CREATED)
      else:
          return Response(file_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class StreamView(APIView):
    parser_class = (PlainTextParser,)
    serializer_class = UnknownPersonSerializer
    unknown_person_serializer = UnknownPersonSerializer()

    def post(self, request, *args, **kwargs):        
        print('>>>Content type: {}'.format(request.content_type ))
        print('>>>Request type: {}'.format(request.method ))
        
        img = imread(io.BytesIO(base64.b64decode(request.body)))
        cv2_img = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)

        return Response(recog(cv2_img))

def recog(frame):
    print('>>Recog called')
    with open(MODEL, 'rb') as f:        
        knn_clf = pickle.load(f)
    #img = face_recognition.load_image_file(frame)
    small_frame = cv2.resize(frame, (0, 0), fx=0.25, fy=0.25)        
    rgb_small_frame = small_frame[:, :, ::-1]
    
    face_locations = face_recognition.face_locations(rgb_small_frame, number_of_times_to_upsample=2)
    if(len(face_locations)!=0):
        print("[INFO] found {} faces".format(len(face_locations))) 
        logging.info("Found")           
        face_encodings = face_recognition.face_encodings(rgb_small_frame, face_locations)                
        face_names = []        
        
        closest_distances = knn_clf.kneighbors(face_encodings, n_neighbors=1)
        is_recognized = [closest_distances[0][i][0] <= DIST_THRESH for i in range(len(face_locations))]
        preds = [(pred, loc) if rec else ("Unknown", loc) for pred, loc, rec in zip(knn_clf.predict(face_encodings), face_locations, is_recognized)]
        #print("[INFO] found Name: {}, Score: {}".format(preds.pred,pred.loc)
        
        for (top, right, bottom, left), pred in zip(face_locations, preds):
            top *= 4
            right *= 4
            bottom *= 4
            left *= 4

            cv2.rectangle(frame, (left, top), (right, bottom), (0, 0, 255), 2)
            cv2.rectangle(frame, (left, bottom - 35), (right, bottom), (0, 0, 255), )
            font = cv2.FONT_HERSHEY_DUPLEX
            cv2.putText(frame, pred[0], (left + 6, bottom - 6), font, 1.0, (255, 255, 255), 1)
    
    flag, encodedImage = cv2.imencode(".jpg", frame)

    retVal = {}
    retVal['photo'] = base64.b64encode(encodedImage)
    retVal['persons'] = {"length": len(face_locations)}

    #return base64.b64encode(encodedImage)
    return retVal
    

#@action(detail=True, methods=['post','delete'])
class AddPersonViewSet(viewsets.ModelViewSet):

    queryset = Person.objects.all()
    serializer_class = PersonSerializer
    person_serializer = PersonSerializer()
    #permission_classes = (permissions.IsAuthenticatedOrReadOnly, )    

    def perform_create(self, person_serializer):        
        print('Adding person: {}'.format(person_serializer.validated_data['name']))
        '''
        Use validated_data['name'] before saving to DB. Once saved, u can access it with data['name']
        '''        

        img = imread(io.BytesIO(base64.b64decode(person_serializer.validated_data['photoBase64'])))
        
        cv2_img = cv2.cvtColor(img, cv2.COLOR_RGB2BGR)
        
        
        PERSON_FOLDER = os.path.join(MEDIA_FOLDER,person_serializer.validated_data['name'])
        #Create dir if new person
        if(not os.path.exists(PERSON_FOLDER)):
            os.mkdir(PERSON_FOLDER)
            
        filename = person_serializer.validated_data['name'] + '.' + "jpg"        
        print('Saving to : ' + os.path.join(PERSON_FOLDER,filename))        
        isSaved = cv2.imwrite(os.path.join(PERSON_FOLDER,filename), cv2_img)
        if(isSaved):
            print('Saved to DB')
            person_serializer.save()
        else:
            print('Image not saved')
        #Selected fields
        #person_serializer.save(update_fields=['name','photoBase64'])

    def destroy(self, request, *args, **kwargs):
        print('Deleting person: {}'.format(kwargs))
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response(status=status.HTTP_204_NO_CONTENT)

class TrainView(APIView):    

    # def post(self, request, *args, **kwargs):
    #     print('>>>Content type: {}'.format(request.content_type ))
    #     print('>>>Request type: {}'.format(request.method ))
    #     return Response('{"msg": "success"}')

    def get(self, request, *args, **kwargs):        
        print('>>>Content type: {}'.format(request.content_type ))
        print('>>>Request type: {}'.format(request.method ))
        
        ##Call
        knn_clf = train(MEDIA_FOLDER, MODEL)        
        return Response(json.loads('{"msg": "success"}'))

def train(train_dir, model_save_path = "", n_neighbors = None, knn_algo = 'ball_tree', verbose=True):
    
    X = []
    y = []
    for class_dir in listdir(train_dir):
        if not isdir(join(train_dir, class_dir)):
            continue
        for img_path in image_files_in_folder(join(train_dir, class_dir)):
            image = face_recognition.load_image_file(img_path)           

            # small_frame = cv2.resize(image, (0, 0), fx=0.25, fy=0.25)        
            # rgb_small_frame = small_frame[:, :, ::-1]           

            faces_bboxes = face_recognition.face_locations(image)
            if len(faces_bboxes) != 1:
                if verbose:
                    print("image {} not fit for training: {}".format(img_path, "didn't find a face" if len(faces_bboxes) < 1 else "found more than one face"))
                continue
            X.append(face_recognition.face_encodings(image, known_face_locations=faces_bboxes)[0])
            y.append(class_dir)


    if n_neighbors is None:
        n_neighbors = int(round(sqrt(len(X))))
        if verbose:
            print("Chose n_neighbors automatically as:", n_neighbors)

    knn_clf = neighbors.KNeighborsClassifier(n_neighbors=n_neighbors, algorithm=knn_algo, weights='distance')
    knn_clf.fit(X, y)

    if model_save_path != "":
        with open(model_save_path, 'wb') as f:
            pickle.dump(knn_clf, f)
    return knn_clf
        
        
    