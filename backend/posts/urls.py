from posts.views import PostViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'', PostViewSet, basename='buypost')
urlpatterns = router.urls
