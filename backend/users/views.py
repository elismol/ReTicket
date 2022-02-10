from django.shortcuts import render
from rest_framework import viewsets, mixins
from users.serializers import UserSerializer
from django.contrib.auth import get_user_model

# Create your views here.


class UserViewSet(mixins.CreateModelMixin,
                  mixins.ListModelMixin,
                  mixins.RetrieveModelMixin,
                  viewsets.GenericViewSet):
    serializer_class = UserSerializer
    queryset = get_user_model().objects.all()
