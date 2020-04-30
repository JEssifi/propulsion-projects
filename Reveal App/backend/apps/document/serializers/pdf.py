from rest_framework import serializers

from apps.document.models.pdf import PDF
from apps.user.serializers import UserSerializer


class PDFSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = PDF
        fields = "__all__"