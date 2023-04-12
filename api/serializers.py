from . import models
from rest_framework import serializers
from django.contrib.auth.models import User



class TagsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Tags
        fields = ['title']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = ['first_name']
        
        
class IssueSerializer(serializers.ModelSerializer):
    tags = TagsSerializer(many=True, read_only=True)
    creator = UserSerializer(read_only=True)
    assigned_user = UserSerializer(read_only=True)

    class Meta:
        model = models.Issue
        fields = ('id','creator', 'issue_title', 'issue_detail', 'issue_status', 'created_at', 'modify_on', 'tags', 'assigned_user')