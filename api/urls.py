from django.urls import path, include
from . import views
from rest_framework.routers import SimpleRouter, DefaultRouter
from .auth.authentication import AuthenticateViewSet

rounter = DefaultRouter()
rounter.register(r'', AuthenticateViewSet, basename="auth")


urlpatterns = [
    path('auth/',include(rounter.urls)),
    path('', views.TestReactApplication.as_view()),
]
