"""reveal URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include

from rest_framework.documentation import include_docs_urls
from rest_framework_simplejwt import views as jwt_views
from apps.user.views import getUserInfo
from apps.search.views import ListSearchedItems


password_patterns = [
    #path('', PasswordResetView.as_view(), name='password-reset'),
    #path('validate/', PasswordResetValidationView.as_view(), name='password-reset-validation')
]

auth_patterns = [
    path('', jwt_views.TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh/', jwt_views.TokenRefreshView.as_view(), name='token_refresh'),
    path('verify/', jwt_views.TokenVerifyView.as_view(), name='verify-token'),
    path('password-reset/', include(password_patterns)),
]

api_patterns = [
    path('', include('apps.registration.urls')),
    path('user/', getUserInfo.as_view()),
    path('document/', include('apps.document.urls')),
    path('tag/', include("apps.tag.urls")),
    path('highlight/', include("apps.highlight.urls")),
    path('auth/token/', include(auth_patterns)),
    path('info', ListSearchedItems.as_view()),
]

urlpatterns = [
    path('backend/admin/', admin.site.urls),
    path('backend/api/', include(api_patterns)),
    path('backend/docs/', include_docs_urls(title='Reveal App API doc', public=True, permission_classes=[])),
]
