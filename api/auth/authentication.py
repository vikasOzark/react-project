from django.contrib.auth.models import User
from django.http import JsonResponse
from rest_framework.viewsets import ViewSet
from rest_framework.decorators import action
from .auth_serializers import UserCreateSerializers
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate

class AuthenticateViewSet(ViewSet):
    @action(methods=["POST"],detail=False, url_path="register")
    def register(self, request):
        data = request.data
        serializer = UserCreateSerializers(data=data)
        if serializer.is_valid():
            user_object =  User.objects.create_user(
                username=serializer.validated_data.get('username'),
                email=serializer.validated_data.get('email'),
                first_name=serializer.validated_data.get('email'),
                password=serializer.validated_data.get('password'),
            )

            token = Token.objects.create(user=user_object)
            return JsonResponse({'status': 200, 'token': token})
        else:
            return JsonResponse({'status': 400, 'error': serializer.errors})
        
    
    
    @action(methods=["POST"],detail=False, url_path="login")
    def login(self, request):
        user_credencials = request.data
        is_user = authenticate(
            request, 
            username=user_credencials.get('username'), 
            password=user_credencials.get('password')
        )
        if is_user:
            TOKEN, NEW_TOKEN = Token.objects.get_or_create(user=is_user)
            if NEW_TOKEN:
                TOKEN = NEW_TOKEN

            user = User.objects.get(username=user_credencials.get('username'))
            user_data = {
                'name': user.first_name,
                'username': user.username,
                'email': user.email,
                'user_role': user.user_role,
            }
            
        return JsonResponse(
            {'status': 200, 
             'token': str(TOKEN), 
             'authUserState': user_data,
             'expiresIn': 20000
             })
    
