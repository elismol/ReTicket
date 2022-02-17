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
    queryset = Post.objects.all()

    def get_queryset(self):
        if post_type := self.request.GET.get("post_type"):
            return super().get_queryset().filter(post_type=post_type)
        return super().get_queryset()
