import django.dispatch
post_user_registration_validation = django.dispatch.Signal(providing_args=["user"])

