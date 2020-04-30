from rest_framework.generics import ListAPIView
from django.db.models import Q
from itertools import chain
from rest_framework.response import Response


from apps.document.models.pdf import PDF
from apps.highlight.models import Highlight
from apps.tag.models import Tag
from apps.highlight.serializers import HighlightSerializer

class ListSearchedItems(ListAPIView):
    """
    GET:
    List through searching all the reference of Highlight, PDF & Tag. Data on Tag can be null, not the others

        SELECT highlight_highlight.*, tag_tag.*, pdf_pdf.*
        FROM highlight_highlight
        JOIN pdf_pdf ON highlight_highlight.id_pdf_id = pdf_pdf.id
        LEFT JOIN tag_tag ON highlight_highlight.id_tag_id = tag_tag.id
        WHERE highlight_highlight.selection LIKE '%keyword%'
        OR pdf_pdf.title LIKE '%keyword%' 
        OR tag_tag.title LIKE '%keyword%'

    """
    serializer_class = HighlightSerializer
    queryset = Highlight.objects.all()

    def get(self, request, *args, **kwargs):

        keyword = '%' + self.request.query_params.get('search', '') + '%'

        highlights = Highlight.objects.raw("SELECT highlight_highlight.*, tag_tag.*, document_pdf.* FROM highlight_highlight JOIN document_pdf ON highlight_highlight.id_pdf_id = document_pdf.id LEFT JOIN tag_tag ON highlight_highlight.id_tag_id = tag_tag.id WHERE highlight_highlight.selection LIKE %s OR document_pdf.title LIKE %s OR tag_tag.title LIKE %s", [keyword,keyword,keyword])

        return Response(self.get_serializer(instance=highlights, many=True).data)