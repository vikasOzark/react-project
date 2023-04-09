from django.contrib.auth.models import User
from rest_framework import  serializers


class UserCreateSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'email', 'username', 'password']