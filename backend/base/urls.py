from django.urls import  path
from . import views
from .views import *
urlpatterns= [
      path('register/', UserSignup.as_view(), name='register'),
]