from django.db import models
from users.models import Profile
# Create your models here.


class WaterConsumption(models.Model):
    profile = models.OneToOneField(
        Profile, on_delete=models.SET_NULL, null=True, blank=True)
    january = models.FloatField(null=True, blank=True)
    february = models.FloatField(null=True, blank=True)
    march = models.FloatField(null=True, blank=True)
    april = models.FloatField(null=True, blank=True)
    may = models.FloatField(null=True, blank=True)
    june = models.FloatField(null=True, blank=True)
    july = models.FloatField(null=True, blank=True)
    august = models.FloatField(null=True, blank=True)
    september = models.FloatField(null=True, blank=True)
    october = models.FloatField(null=True, blank=True)
    november = models.FloatField(null=True, blank=True)
    december = models.FloatField(null=True, blank=True)
    year = models.IntegerField(null=True, blank=True)
    total = models.FloatField(null=True, blank=True)

    def __str__(self):
        return f'{self.profile.first_name} {self.profile.last_name}'
