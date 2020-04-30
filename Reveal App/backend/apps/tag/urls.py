from django.urls import path, include
from apps.tag.views import ListCreateTagView, ListCreatePDFTags, RetrieveUpdateDestroyTagView


pdf_patterns = [
    path('<int:pk>/', ListCreatePDFTags.as_view()),
    # path('new/<int:pk>/', ),
]

urlpatterns = [
    path("", ListCreateTagView.as_view()),
    path("<int:pk>/", RetrieveUpdateDestroyTagView.as_view()),
    path("pdf/", include(pdf_patterns)),
]