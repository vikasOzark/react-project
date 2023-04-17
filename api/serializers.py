from . import models
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UserProfile

class TagsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Tags
        fields = ["title"]


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = ['id', "first_name", 'email']


class IssueSerializer(serializers.ModelSerializer):
    tags = TagsSerializer(many=True, read_only=True)
    creator = UserSerializer(read_only=True)
    assigned_user = UserSerializer(read_only=True)

    class Meta:
        model = models.Issue
        fields = (
            "id",
            "creator",
            "issue_title",
            "issue_detail",
            "issue_status",
            "created_at",
            "modify_on",
            "tags",
            "assigned_user",
        )


class IssueDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Issue
        fields = [
            'issue_title',
            'issue_detail',
            'tags',
            'issue_title',
            'issue_status'
        ]
        
        def create(self, validated_data):
            print(validated_data)
            # viewers = validated_data.pop('viewers')  # removing viewers from validated_data
            instance = models.Issue.objects.create(**validated_data)  # saving post object
            # for viewer in viewers:
            #     instance.viewers.add(viewer)
            return instance
        fields = ('id','creator', 'issue_title', 'issue_detail', 'issue_status', 'created_at', 'modify_on', 'tags', 'assigned_user')


class IssueCreateSerializer(serializers.ModelSerializer):
    creator = UserSerializer(read_only=True)
    tags = TagsSerializer(many=True, read_only=True)
    class Meta:
        model = models.Issue
        fields = '__all__'


class UserSerializerNew(serializers.ModelSerializer):
    class Meta:
        model = models.UserProfile
        fields = ["boss"]
