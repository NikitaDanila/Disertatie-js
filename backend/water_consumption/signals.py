from users.models import Profile
from django.contrib.auth.models import User
from django.db.models.signals import pre_save, post_save, post_init
from django.dispatch import receiver
from .models import WaterConsumption


@receiver(post_save, sender=Profile)
def createWaterConsumptionEntry(sender, instance, created, **kwargs):
    if created:
        profile = instance
        water_consumption = WaterConsumption.objects.create(
            profile=profile,
            id=profile.profile_id,
        )
