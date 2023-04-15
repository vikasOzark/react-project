from django.db import models
from django.contrib.auth.models import User, AbstractBaseUser


class UserProfile(AbstractBaseUser):
    ROLES = (
        ('ADMIN', 'admin'),
        ('MEMBER', 'member')
    )
    user_role = models.CharField(max_length=20, choices=ROLES, null=True, blank=True)
    boss = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)


class Tags(models.Model):
    COLORS = (
        ('RED', 'red'),
        ('YELLOW', 'yellow'),
        ('BLUE', 'blue')
    )
    
    title=models.CharField(max_length=100)
    # color=models.CharField(max_length=20, choices=COLORS, unique=True)
    creator = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    created_at=models.DateTimeField(auto_now_add=True)
    
    def __str__(self) -> str:
        return self.title

class Issue(models.Model):
    ISSUE_STATUS = (
        ('OPEN', 'open'),
        ('CLOSE', 'close'),
        ('WORKING', 'working'),
    )
    
    creator = models.ForeignKey(User, on_delete=models.CASCADE)
    issue_title = models.CharField(max_length=255)
    issue_detail=models.TextField()
    tags = models.ManyToManyField(Tags, related_name='issue_tags')
    issue_status=models.CharField(max_length=20, choices=ISSUE_STATUS, default='OPEN')
    assigned_user=models.ForeignKey(User, on_delete=models.CASCADE, related_name='assigned_user')
    created_at=models.DateTimeField(auto_now_add=True, editable=False)
    modify_on=models.DateTimeField(auto_now_add=True)


    def __str__(self):
        return self.issue_title