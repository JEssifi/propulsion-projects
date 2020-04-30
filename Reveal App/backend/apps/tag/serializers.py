from rest_framework import serializers

from apps.tag.models import Tag
from apps.user.serializers import UserSerializer


class TagSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)

    class Meta:
        model = Tag
        fields = "__all__"