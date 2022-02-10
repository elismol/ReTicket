from django.shortcuts import render
from rest_framework import viewsets, mixins
from rest_framework.response import Response
from users.serializers import UserSerializer, LoginSerializer
from django.contrib.auth import get_user_model
from rest_framework.decorators import action
from django.contrib.auth import authenticate, login


class UserViewSet(mixins.CreateModelMixin,
                  mixins.ListModelMixin,
                  mixins.RetrieveModelMixin,
                  viewsets.GenericViewSet):
    serializer_class = UserSerializer
    queryset = get_user_model().objects.all()

    @action(detail=False, methods=["POST"], serializer_class=LoginSerializer)
    def login(self, request):
        email = request.POST['email']
        password = request.POST['password']
        user = authenticate(request, email=email, password=password)
        if user is not None:
            # Create a session, and return the user object.
            login(request, user)
            serializer = UserSerializer(user, context={"request": request})
            return Response(serializer.data)
        else:
            # Return an 'invalid login' error message.
            return Response({"error": ["Invalid email or password"]}, status=400)
