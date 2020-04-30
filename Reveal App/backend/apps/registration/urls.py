from django.urls import path
from .views import RegistrationView, UserView

urlpatterns = [
    path('registration/', RegistrationView.as_view()),
    path('validation/', UserView.as_view()),
]
