from rest_framework import serializers

from apps.highlight.models import Highlight
from apps.user.serializers import UserSerializer


class HighlightSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Highlight
        fields = "__all__"
        depth = 1