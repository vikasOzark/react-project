from django.shortcuts import render
from rest_framework.views import APIView
from django.http import HttpResponse, JsonResponse
from django.db.models import Count

class TestReactApplication(APIView):
    def get(self, request):
        return JsonResponse({'sustaus': 200})