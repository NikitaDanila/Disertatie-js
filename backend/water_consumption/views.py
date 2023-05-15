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
@permission_classes([IsAuthenticated])
def getWaterConsumptionById(request, pk):

    profile = Profile.objects.get(user=pk)
    waterConsumption = WaterConsumption.objects.get(
        profile__profile_id=profile.profile_id)
    serializer = WaterConsumptionSerializer(waterConsumption, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def getAllWaterConsumption(request):
    waterConsumption = WaterConsumption.objects.all()
    serializer = WaterConsumptionSerializer(waterConsumption, many=True)
    return Response(serializer.data)


@api_view(['PUT', 'GET'])
@permission_classes([IsAuthenticated])
def updateWaterConsumption(request, pk):
    data = request.data
    user = request.user
    profile = Profile.objects.get(user=pk)
    water_consumption = WaterConsumption.objects.get(profile=profile)

    if (request.method == 'PUT'):
        water_consumption.january = data['january']
        water_consumption.february = data['february']
        water_consumption.march = data['march']
        water_consumption.april = data['april']
        water_consumption.may = data['may']
        water_consumption.june = data['june']
        water_consumption.july = data['july']
        water_consumption.august = data['august']
        water_consumption.september = data['september']
        water_consumption.october = data['october']
        water_consumption.november = data['november']
        water_consumption.december = data['december']

    water_consumption.save()

    serializer = WaterConsumptionSerializer(water_consumption, many=False)
    return Response(serializer.data)


@api_view(['PUT', 'GET'])
@permission_classes([IsAdminUser])
def adminUpdateWaterConsumption(request):
    data = request.data
    user = request.user
    profile = Profile.objects.get(user=user.id)
    water_consumption = WaterConsumption.objects.get(profile=data['profile'])

    if (request.method == 'PUT'):
        water_consumption.january = data['january']
        water_consumption.february = data['february']
        water_consumption.march = data['march']
        water_consumption.april = data['april']
        water_consumption.may = data['may']
        water_consumption.june = data['june']
        water_consumption.july = data['july']
        water_consumption.august = data['august']
        water_consumption.september = data['september']
        water_consumption.october = data['october']
        water_consumption.november = data['november']
        water_consumption.december = data['december']

    water_consumption.save()

    serializer = WaterConsumptionSerializer(water_consumption, many=False)
    return Response(serializer.data)
