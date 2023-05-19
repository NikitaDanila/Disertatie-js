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


@api_view(['GET'])
def getWaterConsumptionByMonth(request, pk, month):
    current = 0
    previous = 0
    water_consumption = WaterConsumption.objects.get(profile=pk)
    match month:
        case '0':
            current = water_consumption.january
            previous = 0
        case '1':
            current = water_consumption.february
            previous = water_consumption.january
        case '2':
            current = water_consumption.march
            previous = water_consumption.february
        case '3':
            current = water_consumption.april
            previous = water_consumption.march
        case '4':
            current = water_consumption.may
            previous = water_consumption.april
        case '5':
            current = water_consumption.june
            previous = water_consumption.may
        case '6':
            current = water_consumption.july
            previous = water_consumption.june
        case '7':
            current = water_consumption.august
            previous = water_consumption.july
        case '8':
            current = water_consumption.september
            previous = water_consumption.august
        case '9':
            current = water_consumption.october
            previous = water_consumption.september
        case '10':
            current = water_consumption.november
            previous = water_consumption.october
        case '11':
            current = water_consumption.december
            previous = water_consumption.november
        case _:
            return Response(current)
    return Response({'current': current,
                     'previous': previous,
                     'profile': water_consumption.profile.profile_id})
