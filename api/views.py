from django.shortcuts import render
from rest_framework.views import APIView
from django.http import HttpResponse, JsonResponse
from django.db.models import Count
from . import models
from .serializers import TagsSerializers, IssueSerializer 


class IssueHandlerAPIView(APIView):
    def get(self, request):
        params = request.query_params
        issues = models.Issue.objects.filter(creator__username=params.get('user'))
        serializer = IssueSerializer(issues, many=True).data
        print(serializer) 
        return JsonResponse({'sustaus': 200, 'data': serializer})
    
    def post(self, request):
        issue_data = request.data
        tags = models.Tags.objects.filter(title__in=issue_data.get('tags'))
        user = models.User.objects.get(username=issue_data.get('user'))
        
        obj = models.Issue.objects.create(
            creator = user,
            issue_title = issue_data.get('issue_title'),
            issue_detail = issue_data.get('issue_detail'),
            assigned_user = user,
        )
        
        obj.tags.add(*tags)
        obj.save()
        
        return JsonResponse({'sustaus': 200})
    
class GetEngineer(APIView):
    def get(self, request):
        pass

    def post(request):
        pass
    
class TagsManager(APIView):
    def get(self, request):
        get_data = request.query_params
        user = models.User.objects.get(username=get_data.get('user'))
        all_tags = models.Tags.objects.filter(creator=user).values_list('title', flat=True)
        tags = list(all_tags)
        
        return JsonResponse({'sustaus': 200, 'data':tags},  safe=False)

    def post(self, request):
        post_data = request.data
        user = models.User.objects.get(username=post_data.get('user'))
        models.Tags.objects.create(
            title=post_data.get('tagTitle'),
            creator=user,
        )
        all_tags = models.Tags.objects.filter(creator=user).only('title').values_list('title')
        
        return JsonResponse({'sustaus': 200, 'data':request.data.get('tagTitle')})