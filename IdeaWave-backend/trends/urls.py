from django.urls import path
from .views import get_google_trends

urlpatterns = [
    path('api/trends/', get_google_trends, name='get_google_trends'),
]
