# -*- coding: utf-8 -*-
"""
Created on Sat Nov 30 14:30:00 2019

@author: hemsingh
"""

from os import listdir
from os.path import join, isfile, splitext
import pickle
from PIL import Image, ImageFont, ImageDraw
import face_recognition as fr
import base64, uuid
from base64 import decodestring

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}
global X_imgg

class FrService:
    def predict(X_img_path, knn_clf = None, model_save_path ="", DIST_THRESH = .5):    

        if not isfile(X_img_path) or splitext(X_img_path)[1][1:] not in ALLOWED_EXTENSIONS:
            raise Exception("invalid image path: {}".format(X_img_path))

        if knn_clf is None and model_save_path == "":
            raise Exception("must supply knn classifier either thourgh knn_clf or model_save_path")

        if knn_clf is None:
            with open(model_save_path, 'rb') as f:
                knn_clf = pickle.load(f)

        #print(knn_clf)
        X_img = fr.load_image_file(X_img_path)
        print(type(X_img))
        #print('val: {} '.format(X_img))
        X_faces_loc = fr.face_locations(X_img, number_of_times_to_upsample=2)
        if len(X_faces_loc) == 0:
            return []

        faces_encodings = fr.face_encodings(X_img, known_face_locations=X_faces_loc)
        print('Face encodings: {}'.format(len(faces_encodings)))


        closest_distances = knn_clf.kneighbors(faces_encodings, n_neighbors=1)
        #print(closest_distances)
        is_recognized = [closest_distances[0][i][0] <= DIST_THRESH for i in range(len(X_faces_loc))]
        

        # predict classes and cull classifications that are not with high confidence
        return [(pred, loc) if rec else ("Unknown", loc) for pred, loc, rec in zip(knn_clf.predict(faces_encodings), X_faces_loc, is_recognized)]

    def draw_preds(img_path, preds):
        """
        shows the face recognition results visually.

        :param img_path: path to image to be recognized
        :param preds: results of the predict function
        :return:
        """
        source_img = Image.open(img_path).convert("RGBA")
        draw = ImageDraw.Draw(source_img)
        for pred in preds:
            loc = pred[1]
            name = pred[0]
            #print('type of loc: %s'.format(loc))
            # (top, right, bottom, left) => (left,top,right,bottom)
            draw.rectangle(((loc[3], loc[0]), (loc[1],loc[2])), outline="red")
            draw.text((loc[3], loc[0] - 30), name, font=ImageFont.truetype('arial.ttf', 30))
            draw.text((loc[3], loc[0] - 60), str(loc), font=ImageFont.truetype('arial.ttf', 16))
        source_img.show()

    def recog(frame):

        small_frame = cv2.resize(frame, (0, 0), fx=0.25, fy=0.25)        
        rgb_small_frame = small_frame[:, :, ::-1]
        
        face_locations = face_recognition.face_locations(rgb_small_frame, number_of_times_to_upsample=2)
        if(len(face_locations)!=0):
            print("[INFO] found {} faces".format(len(face_locations)))            
            if process_this_frame:

                face_encodings = face_recognition.face_encodings(rgb_small_frame, face_locations)                
                face_names = []        
                
                closest_distances = knn_clf.kneighbors(face_encodings, n_neighbors=1)
                is_recognized = [closest_distances[0][i][0] <= DIST_THRESH for i in range(len(face_locations))]
                preds = [(pred, loc) if rec else ("Unknown", loc) for pred, loc, rec in zip(knn_clf.predict(face_encodings), face_locations, is_recognized)]
                #print("[INFO] found Name: {}, Score: {}".format(preds.pred,pred.loc)
            process_this_frame = not process_this_frame
            for (top, right, bottom, left), pred in zip(face_locations, preds):
                top *= 4
                right *= 4
                bottom *= 4
                left *= 4

                cv2.rectangle(frame, (left, top), (right, bottom), (0, 0, 255), 2)
                cv2.rectangle(frame, (left, bottom - 35), (right, bottom), (0, 0, 255), cv2.FILLED)
                font = cv2.FONT_HERSHEY_DUPLEX
                cv2.putText(frame, pred[0], (left + 6, bottom - 6), font, 1.0, (255, 255, 255), 1)
        
        flag, encodedImage = cv2.imencode(".jpg", frame)

        return base64.b64encode(encodedImage)
