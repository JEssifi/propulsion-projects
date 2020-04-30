from rest_framework.generics import RetrieveUpdateAPIView
from django.contrib.auth import get_user_model

from apps.user.serializers import UserSerializer

User = get_user_model()


class getUserInfo(RetrieveUpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user