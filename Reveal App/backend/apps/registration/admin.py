from django.contrib import admin

# Register your models here.
from .models import Registration, Verification

admin.site.register(Registration)
admin.site.register(Verification)

