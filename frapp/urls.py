from django.urls import path, include,re_path
from rest_framework import routers
from .views import *

person_list = AddPersonViewSet.as_view({
    'get':'list',
    'post': 'create',    
})

person_detail = AddPersonViewSet.as_view({
    'get':'retrieve',
    'put': 'update',
    'patch': 'partial_update',
    'delete': 'destroy'
})

router = routers.DefaultRouter(trailing_slash=False)
#router.register(r'', AddPersonViewSet)


urlpatterns = [
    #path(r'api/', include(router.urls)),    
    path('',index),
    re_path('^ui/(?P<path>.*)/$', index),    
    path('person', person_list, name='person-list'),
    path('person/<int:pk>', person_detail, name='person-detail'),
    path('stream', StreamView.as_view()),
    path('train', TrainView.as_view()),
    
]