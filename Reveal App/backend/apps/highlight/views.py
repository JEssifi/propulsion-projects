from rest_framework.response import Response
from rest_framework.generics import ListAPIView, ListCreateAPIView, RetrieveUpdateDestroyAPIView

from apps.highlight.models import Highlight
from apps.highlight.serializers import HighlightSerializer


class ListHighlightView(ListAPIView):
    """
    GET:
    List all Highlights.
    """
    serializer_class = HighlightSerializer

    def get_queryset(self):
        return Highlight.objects.filter(selection__icontains=self.request.query_params.get('search', ''))


class ListCreatePDFHighlights(ListCreateAPIView):
    """
    GET:
    List all Highlights related to a PDF.
    POST:
    Create a new Highlight related to a PDF.
    """
    serializer_class = HighlightSerializer

    def get_queryset(self):
        id_pdf = self.kwargs.get("pk")
        return Highlight.objects.filter(id_pdf=id_pdf).order_by("-date_updated")

    def create(self, request, *args, **kwargs):
        id_pdf = self.kwargs.get("pk")
        highlight = Highlight(id_user=request.user, id_pdf_id=id_pdf, id_tag_id=request.data['tag'], starting_point=request.data['starting_point'], ending_point=request.data['ending_point'], selection=request.data['selection'])
        highlight.save()
        return Response(self.get_serializer(instance=highlight).data)


class ListTagHighlights(ListAPIView):
    """
    GET:
    List all Highlights related to a Tag.
    """
    serializer_class = HighlightSerializer

    def get_queryset(self):
        id_tag = self.kwargs.get("pk")
        return Highlight.objects.filter(id_tag=id_tag).order_by("-date_updated")


class RetrieveUpdateDestroyHighlightView(RetrieveUpdateDestroyAPIView):
    """
    GET:
    List details for a specific Highlight.
    PATCH: 
    Update a Highlight
    DELETE:
    Destroy a Highlight
    """
    queryset = Highlight
    serializer_class = HighlightSerializer