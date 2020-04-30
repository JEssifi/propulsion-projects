from django.db import models
from django_extensions.db.models import TimeStampedModel



class Registration(TimeStampedModel):
    email = models.EmailField()
    verification = models.TextField(blank=True)

class Verification(TimeStampedModel):
    verification_code = models.TextField()
    email = models.EmailField()
    username = models.TextField()
    firstname = models.TextField()
    lastname = models.TextField()
    password = models.TextField()
    password_repeat = models.TextField()


