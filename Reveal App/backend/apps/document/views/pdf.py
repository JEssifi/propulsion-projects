from rest_framework.response import Response
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from apps.document.models.pdf import PDF
from apps.document.serializers.pdf import PDFSerializer

from apps.document.extractors.pdf import PDF_to_Text


class ListCreatePDFView(ListCreateAPIView):
    serializer_class = PDFSerializer

    def get_queryset(self):
        return PDF.objects.filter(title__icontains=self.request.query_params.get('search', ''))


    def create(self, request, *args, **kwargs):
        document = request.FILES['PDFfile']
        text = PDF_to_Text(document)
        pdf = PDF(id_user=request.user, title=document.name, PDFfile = document, content_text=text)
        pdf.save()
        return Response(self.get_serializer(instance=pdf).data)


class RetrieveUpdateDeletePDFView(RetrieveUpdateDestroyAPIView):
    queryset = PDF
    serializer_class = PDFSerializer