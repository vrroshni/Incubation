from django.urls import  path
from . import views
from .views import *
urlpatterns= [
      path('register/', UserSignup.as_view(), name='register'),
      path('newapplication/', NewApplication.as_view(), name='newapplication'),
      path('applications/', AllApplication.as_view(), name='applications'),
]