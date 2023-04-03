from django.shortcuts import render
from rest_framework.views import APIView
from django.http import HttpResponse, JsonResponse


class TestReactApplication(APIView):
    def get(self, request):
        return JsonResponse({'status': 'Its worked fine !'})