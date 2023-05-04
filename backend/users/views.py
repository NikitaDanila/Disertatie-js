from association.models import Association
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .serializer import ProfileSerializer, UserSerializer, UserSerializerWithToken
from .models import Profile

from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.decorators import api_view, permission_classes
from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User
import sys
sys.path.append("..")


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSerializerWithToken(self.user).data

        for key, value in serializer.items():
            data[key] = value

        return data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['POST'])
def registerUser(request):
    data = request.data
    try:
        user = User.objects.create(
            username=data['email'],
            email=data['email'],
            first_name=data['first_name'],
            last_name=data['last_name'],
            password=make_password(data['password'])
        )
        serializer = UserSerializerWithToken(user, many=False)

        return Response(serializer.data)
    except:
        message = {'detail': 'User with this email already exists'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([IsAdminUser])
def adminRegisterUser(request):
    data = request.data
    try:
        user = User.objects.create(
            username=data['email'],
            email=data['email'],
            first_name=data['first_name'],
            last_name=data['last_name'],
            is_staff=data['isAdmin'],
            password=data['password']
        )
        profile = Profile.objects.create(
            user=user,
            profile_id=user.id,
            username=user.email,
            first_name=user.first_name,
            last_name=user.last_name,
            email=user.email,
            apartment_number=data['apartment_number'],
            mobile_number=data['mobile_number'],
            association=Association.objects.get(id=data['foo']),
            isAdmin=user.is_staff
        )
        profile.save()
        user_serializer = UserSerializerWithToken(user, many=False)
        profile_serializer = ProfileSerializer(profile, many=False)
        return Response(user_serializer.data, profile_serializer.data)
    except:
        message = {'detail': 'User with this email already exists'}
        return Response(message, status=status.HTTP_400_BAD_REQUEST)


@ api_view(['GET'])
@ permission_classes([IsAdminUser])
def getAllUsers(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)


@ api_view(['GET'])
@ permission_classes([IsAdminUser])
def getUserById(request, pk):
    user = User.objects.get(id=pk)
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


@ api_view(['PUT', 'GET'])
@ permission_classes([IsAuthenticated])
def updateUser(request, pk):
    user = User.objects.get(id=pk)
    profile = Profile.objects.get(user=user.id)

    data = request.data

    user.first_name = data['first_name']
    user.last_name = data['last_name']
    user.email = data['email']
    user.is_staff = data['isAdmin']

    profile.apartment_number = data['apartment_number']
    profile.mobile_number = data['mobile_number']
    if (data['foo'] != None):
        print('entered')
        profile.association = Association.objects.get(
            id=data['foo'])

    profile.save()
    user.save()

    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


@ api_view(['GET'])
@ permission_classes([IsAuthenticated])
def getCurrentUser(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return Response(serializer.data)


@ api_view(['GET'])
def getProfiles(request):
    profiles = Profile.objects.all()
    serializer = ProfileSerializer(profiles, many=True)
    return Response(serializer.data)


@ api_view(['GET'])
@ permission_classes([IsAuthenticated])
def getProfile(request, pk):
    user = request.user
    profile = Profile.objects.get(user=pk)
    serializer = ProfileSerializer(profile, many=False)
    return Response(serializer.data)


@ api_view(['PUT', 'GET'])
@ permission_classes([IsAuthenticated])
def updateProfile(request):
    user = request.user
    profile = Profile.objects.get(user=user.id)
    serializer = UserSerializerWithToken(user, many=False)

    data = request.data

    user.first_name = data['first_name']
    user.last_name = data['last_name']

    if data['password'] != "":
        user.password = make_password(data['password'])
    if data['email'] != "":
        user.email = data['email']
    if (profile.apartment_number != data['apartment_number']):
        profile.apartment_number = data['apartment_number']
    if profile.mobile_number != data['mobile_number']:
        profile.mobile_number = data['mobile_number']

    profile.save()
    user.save()
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteUser(request, pk):
    user_to_delete = User.objects.get(id=pk)
    user_to_delete.delete()
    return Response('User was deleted')
