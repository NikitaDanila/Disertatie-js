from .models import Profile
from django.contrib.auth.models import User

from django.db.models.signals import pre_save, post_save
from django.dispatch import receiver


@receiver(pre_save, sender=User)
def updateUser(sender, instance, **kwargs):
    user = instance
    if user.email != "":
        user.username = user.email


@receiver(post_save, sender=User)
def createProfile(sender, instance, created, **kwargs):
    if created:
        user = instance
        profile = Profile.objects.create(
            user=user,
            username=user.username,
            first_name=user.first_name,
            last_name=user.last_name,
            email=user.email
        )


@receiver(pre_save, sender=User)
def updateProfile(sender, instance, **kwargs):
    user = instance
    profile = Profile.objects.get(user=user.id)
    profile.first_name = user.first_name
    profile.last_name = user.last_name
    profile.username = user.email
    profile.save()
