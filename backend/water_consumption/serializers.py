from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from .models import WaterConsumption


class WaterConsumptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = WaterConsumption
        # fields = '__all__'
        exclude = ['id', 'year', 'total']
