from django.urls import path, include
from . import views
from rest_framework.routers import SimpleRouter, DefaultRouter
from .auth.authentication import AuthenticateViewSet
# from rest_framework_simplejwt.views import (
#     TokenObtainPairView,
#     TokenRefreshView,
# )
# from rest_framework_simplejwt.views import TokenVerifyView


rounter = DefaultRouter()
rounter.register(r'', AuthenticateViewSet, basename="auth")



urlpatterns = [
    # path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    # path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    # path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
    
    path('auth/', include(rounter.urls)),
    path('issue-create/', views.IssueHandlerAPIView.as_view()),
    path('create-tag/', views.TagsManager.as_view()),
    path('data_update/<int:pk>/', views.IssueDetailView.as_view()),
    path('list/', views.GetIssueList.as_view()),
    path("members/", views.GetEngineer.as_view())

]

# urlpatterns = rounter.urls