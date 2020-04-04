from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
#from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token

urlpatterns = [
    path('', include('frapp.urls')),
    path('admin/', admin.site.urls),
    path('upload/', include('frapp.urls')),
    # path('chat/', include('chatapp.urls')),
    # path('fr/', include('frapp.urls')),
    # path(r'api-token-auth/', obtain_jwt_token),
    # path(r'api-token-refresh/', refresh_jwt_token),
]

if settings.DEBUG:
  urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)