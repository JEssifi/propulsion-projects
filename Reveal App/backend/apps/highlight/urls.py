from django.urls import path, include
from apps.highlight.views import ListHighlightView, ListCreatePDFHighlights, ListTagHighlights, RetrieveUpdateDestroyHighlightView


urlpatterns = [
    path("", ListHighlightView.as_view()),
    path("<int:pk>/", RetrieveUpdateDestroyHighlightView.as_view()),
    path("pdf/<int:pk>/", ListCreatePDFHighlights.as_view()),
    path("tag/<int:pk>/", ListTagHighlights.as_view()),
]