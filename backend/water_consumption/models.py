from django.db import models
from users.models import Profile
# Create your models here.


class WaterConsumption(models.Model):
    profile = models.OneToOneField(
        Profile, on_delete=models.CASCADE, null=True, blank=True)
    id = models.IntegerField(primary_key=True, editable=False)
    january = models.FloatField(null=True, blank=True, default=0)
    february = models.FloatField(null=True, blank=True, default=0)
    march = models.FloatField(null=True, blank=True, default=0)
    april = models.FloatField(null=True, blank=True, default=0)
    may = models.FloatField(null=True, blank=True, default=0)
    june = models.FloatField(null=True, blank=True, default=0)
    july = models.FloatField(null=True, blank=True, default=0)
    august = models.FloatField(null=True, blank=True, default=0)
    september = models.FloatField(null=True, blank=True, default=0)
    october = models.FloatField(null=True, blank=True, default=0)
    november = models.FloatField(null=True, blank=True, default=0)
    december = models.FloatField(null=True, blank=True, default=0)
    year = models.IntegerField(null=True, blank=True)
    total = models.FloatField(null=True, blank=True, default=0)

    def __str__(self):
        return f'{self.profile}'
