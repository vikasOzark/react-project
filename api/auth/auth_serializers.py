from django.contrib.auth.models import User
from rest_framework import  serializers
from .. import models


class UserCreateSerializers(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'email', 'username', 'password']
        

class TagsSerializers(serializers.ModelSerializer):
    class Meta:
        model = models.Tags
        fields = ['title']