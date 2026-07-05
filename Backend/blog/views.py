from rest_framework import generics
from .models import BlogPost
from .serializers import BlogPostSerializer

class BlogListAPIView(generics.ListAPIView):
    queryset = BlogPost.objects.all().order_by("-created_at")
    serializer_class = BlogPostSerializer