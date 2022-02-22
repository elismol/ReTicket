from django.shortcuts import render
from rest_framework import viewsets
from posts.serializers import PostSerializer
from posts.models import Post

# Create your views here.


class PostViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing post instances.
    """
    serializer_class = PostSerializer

    def get_queryset(self):
        if post_type := self.request.GET.get("post_type"):
            return Post.objects.filter(post_type=post_type)
        return Post.objects.all()
