from users.models import User
from rest_framework import serializers


class UserSerializer(serializers.HyperlinkedModelSerializer):
    """
    This serializer is used when creating and getting user objects.
    """
    class Meta:
        model = User
        fields = ['url', 'first_name', 'last_name', 'email']


class LoginSerializer(serializers.HyperlinkedModelSerializer):
    """
    This serializer is used for login.
    """
    class Meta:
        model = User
        fields = ["email", "password"]
