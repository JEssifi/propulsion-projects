from rest_framework import status
from rest_framework.response import Response
from django.core.mail import send_mail
from rest_framework.views import APIView
from reveal.settings import DEFAULT_FROM_EMAIL
from .serializer import RegistrationSerializer
from .token import TokenGen
from .models import Registration
from ..user.serializers import UserSerializer



class RegistrationView(APIView):
    permission_classes = []
    def post(self, request):
        
        TokenVerification = TokenGen()
        data = {
            "email": request.data['email'],
            "verification": TokenVerification

        }
        serializer = RegistrationSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            send_mail(
                subject='Reveal App Verification',
                message="Thanks for Registering on Reveal-App.com, "
                        "Your Verification Key is " + TokenVerification,
                from_email=DEFAULT_FROM_EMAIL,
                recipient_list=[request.data['email']],
                fail_silently=False,
            )
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)


class UserView(APIView):
    permission_classes = []
    def post(self, request):
        checkifexist = Registration.objects.filter(email=request.data['email'], verification=request.data['verification_code'])
        if checkifexist:
            serializer = UserSerializer(data=request.data)
            if serializer.is_valid():
                serializer.save()
                checkifexist.delete()

                return Response(status=status.HTTP_201_CREATED)
        return Response(status=status.HTTP_400_BAD_REQUEST)
