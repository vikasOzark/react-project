from . import models
from rest_framework import serializers
from django.contrib.auth.models import User


class TagsSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Tags
        fields = ["title"]


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.User
        fields = ["first_name"]


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
    class Meta:
        model = models.Issue
        fields = ('issue_title', 'issue_detail')

    def create(self, validated_data):
        print(validated_data)
        # tags = models.Tags.objects.filter(title__in=validated_data.get('tags'))
        user = models.User.objects.get(username='admin')
        
        obj = models.Issue.objects.create(
            issue_title = validated_data.get('issue_title'),
            issue_detail = validated_data.get('issue_detail'),
            assigned_user = user,
        )
        
        # obj.tags.add(*tags)
        obj.save()

        return obj