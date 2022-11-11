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
      path('userapplications/<int:id>/', UserApplications.as_view(), name='userapplications'),
      path('approve/<int:id>/', ApproveApplication.as_view(), name='approve'),
      path('reject/<int:id>/', RejectApplication.as_view(), name='reject'),
      path('createslot/', CreateSlot.as_view(), name='createslot'),
      path('allslots/', AllSlots.as_view(), name='allslots'),
      path('allotslot/', AllotSlot.as_view(), name='allotslot'),
      path('viewdetail/<int:id>',views.ViewDetail.as_view(),name="viewdetail"),


]