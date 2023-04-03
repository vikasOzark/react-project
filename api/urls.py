from django.urls import path
from . import views

urlpatterns = [
    path('', views.TestReactApplication.as_view()),
]
