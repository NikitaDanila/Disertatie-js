from django.db import models
from django.contrib.auth.models import User
from association.models import Association
# Create your models here.


class Profile(models.Model):
    user = models.OneToOneField(
        User, on_delete=models.CASCADE, null=True, blank=True)
    association = models.ForeignKey(
        Association, on_delete=models.SET_NULL, null=True)
    username = models.CharField(max_length=200, null=True, blank=True)
    first_name = models.CharField(max_length=30, null=False, blank=False)
    last_name = models.CharField(max_length=30, null=False, blank=False)
    profilePicture = models.ImageField(
        null=True, blank=True, default="default.jpg")
    email = models.EmailField(max_length=200, null=False, blank=False)
    mobile_number = models.CharField(max_length=13, null=False, blank=False)
    apartment_number = models.CharField(max_length=3, null=False, blank=False)
    createdAt = models.DateTimeField(auto_now_add=True)
    profile_id = models.AutoField(primary_key=True, editable=False)
    isAdmin = models.BooleanField(null=False, blank=True, default=False)

    def __str__(self):
        return f'{self.username}'
