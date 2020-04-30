from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']
    email = models.EmailField(unique=True)
    verification_code = models.TextField(blank=False)
    preferred_theme = models.BooleanField(
        default=False,
        help_text='If user prefer the dark theme, activate this field',
    )

    ### Added field ###

    avatar = models.ImageField(
        upload_to='',
        blank=True,
    )

    def __str__(self):
        return self.username
