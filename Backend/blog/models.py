from django.db import models

class BlogPost(models.Model):
    title = models.CharField(max_length=200)
    excerpt = models.TextField()
    content = models.TextField()
    read_time = models.CharField(max_length=50, default="5 min read")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title