from rest_framework import serializers
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.models import User
from .models import Profile


class UserSerializer(serializers.ModelSerializer):
    fullname = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)
    # user_id = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'fullname', 'email',
                  'isAdmin', 'first_name', 'last_name']

    def get_fullname(self, obj):
        fullname = f'{obj.first_name} {obj.last_name}'
        if fullname == ' ':
            fullname = obj.email
        return fullname

    def get_isAdmin(self, obj):
        return obj.is_staff
    # def get_user_id(self, obj):
    #     user_id = obj.id
    #     return user_id


class UserSerializerWithToken(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'fullname', 'email',
                  'isAdmin', 'token', 'first_name', 'last_name',]

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = '__all__'
