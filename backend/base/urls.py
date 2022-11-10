from django.urls import  path
from . import views
from .views import *
urlpatterns= [
      path('register/', UserSignup.as_view(), name='register'),
      path('newapplication/', NewApplication.as_view(), name='newapplication'),
      path('applications/', AllApplication.as_view(), name='applications'),
      path('pending/', PendingApplications.as_view(), name='pending'),
      path('approved/', ApprovedApplications.as_view(), name='approved'),
      path('rejected/', RejectedApplications.as_view(), name='rejected'),
      path('approve/<int:id>/', ApproveApplication.as_view(), name='approve'),
      path('reject/<int:id>/', RejectApplication.as_view(), name='reject'),
]