from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response
from .models import WaterConsumption
from django.contrib.auth.models import User
from users.models import Profile
from .serializers import WaterConsumptionSerializer
# Create your views here.


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getWaterConsumption(request):
    user = request.user
    profile = Profile.objects.get(user=user.id)
    waterConsumption = WaterConsumption.objects.get(
        profile__profile_id=profile.profile_id)
    serializer = WaterConsumptionSerializer(waterConsumption, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def getAllWaterConsumption(request):
    waterConsumption = WaterConsumption.objects.all()
    serializer = WaterConsumptionSerializer(waterConsumption, many=True)
    return Response(serializer.data)
