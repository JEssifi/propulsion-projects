from django.urls import path, include
from apps.document.views.pdf import ListCreatePDFView,RetrieveUpdateDeletePDFView

pdf_patterns = [
    path('', ListCreatePDFView.as_view()),
    path('<int:pk>/', RetrieveUpdateDeletePDFView.as_view()),
    # path('list/', ),
]

urlpatterns = [
    path('pdf/', include(pdf_patterns)),
]