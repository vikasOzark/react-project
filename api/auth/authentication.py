from django.contrib.auth.models import User
from django.http import JsonResponse
from rest_framework.viewsets import ViewSet
from rest_framework.decorators import action


class AuthenticateViewSet(ViewSet):
    
    @action(methods=["POST"],detail=False, url_path="register")
    def signup(self, request):
        print(request.data)
        
        return JsonResponse({'status': 200})
    
    
    @action(methods=["POST"],detail=False, url_path="login")
    def signup(self, request):
        print(request.data)
        
        return JsonResponse({'status': 200})