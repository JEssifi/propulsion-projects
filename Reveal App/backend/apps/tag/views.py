from rest_framework.response import Response
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

from apps.tag.models import Tag
from apps.tag.serializers import TagSerializer

class ListCreateTagView(ListCreateAPIView):
    """
    GET:
    List all tags.
    POST:
    Create a new tag.
    """
    serializer_class = TagSerializer

    def get_queryset(self):
        return Tag.objects.filter(title__icontains=self.request.query_params.get('search', ''))


class ListCreatePDFTags(ListCreateAPIView):
    """
    GET:
    List all tags of a specific PDF.
    POST: 
    Create a new tag related to a PDF
    """
    serializer_class = TagSerializer

    def get_queryset(self):
        id_pdf = self.kwargs.get("pk")
        return Tag.objects.filter(pdf=id_pdf).order_by("-date_updated")

    def create(self, request, *args, **kwargs):
        id_pdf = self.kwargs.get("pk")
        tag = Tag(id_user=request.user, pdf=id_pdf, title=request.data['title'], color=request.data['color'])
        tag.save()
        return Response(self.get_serializer(instance=tag).data)


class RetrieveUpdateDestroyTagView(RetrieveUpdateDestroyAPIView):
    """
    GET:
    List details for a specific Tag.
    PATCH: 
    Update a Tag
    DELETE:
    Destroy a Tag
    """
    queryset = Tag
    serializer_class = TagSerializer