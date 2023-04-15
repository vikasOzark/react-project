from django.shortcuts import render
from rest_framework.views import APIView
from django.http import HttpResponse, JsonResponse
from django.db.models import Count
from . import models
from rest_framework.decorators import api_view
from django.forms.models import model_to_dict
from .serializers import  IssueSerializer , TagsSerializer, IssueDataSerializer, IssueCreateSerializer


class IssueHandlerAPIView(APIView):
    def get(self, request):
        params = request.query_params
        if params.get('id') is not None:
            issues = models.Issue.objects.get(pk=params.get('id'))
            data = IssueSerializer(issues).data
            return JsonResponse({'sustaus': 200, 'data': data})
            
        issues = models.Issue.objects.filter(creator__username=params.get('user'))
        data = IssueSerializer(issues, many=True).data
        return JsonResponse({'sustaus': 200, 'data': data})
    
    def post(self, request):
        issue_data = request.data
        
        if issue_data.get('id') == '':
            return self.save_new_issue(issue_data)
        else:
            id = issue_data.get('id')
            return self.update_issue(id=id, issue_data=issue_data)
            
        
    def save_new_issue(self, issue_data):
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

    def update_issue(slef, id, issue_data):
        issue = models.Issue.objects.get(pk=id)
        ser = IssueDataSerializer(data=issue)
        tags = models.Tags.objects.filter(title__in=issue_data.get('tags'))
        issue.issue_title = issue_data.get('issue_title'),
        issue.issue_detail = issue_data.get('issue_detail'),
        # issue.issue_status = issue_data.get('')
        
        issue.tags.add(*tags)
        issue.save()
        
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
    

@api_view(['GET'])
def get_issue(request):
    # params = request.query_params
    data = ''

    return JsonResponse({'status' : 200 , 'data': data})


@api_view(['POST'])
def data_update(request):
    data = request.data
    x = IssueCreateSerializer(data=data)
    if x.is_valid(raise_exception=True):
        x.save()
    else:
        print(x.errors)
    return JsonResponse(
        {
        'status':200
        }
    )