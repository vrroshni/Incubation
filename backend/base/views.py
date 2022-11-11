from django.shortcuts import render
from base.api.serializers import *
from base.models import *
from rest_framework.views import APIView
from rest_framework.response import Response
import json
from rest_framework import status




# Create your views here.
class UserSignup(APIView):
    def post(self,request):
        body = request.body.decode('utf-8')
        body = json.loads(body)
        username = body['username']
        email = body['email']
        password=body['password']
        User.objects.create_user(username=username,
         email=email,password=password)
        return Response(200)




class NewApplication(APIView):
    def post(self,request):
        print(request.data,'.............................')
        newapplication=NewApplicationserializer(data=request.data)
        if newapplication.is_valid():
            newapplication.save()
            return Response(status=200)
        else:
            data=newapplication.errors
            return Response(status=status.HTTP_404_NOT_FOUND)

class UserApplications(APIView):
     def post(self,request,id):
        print(id,'uuuuuuserrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr')
        applications=Application.objects.filter(user=id)
        All=AllApplicationserializer(applications,many=True)
        if All :
            return Response(All.data,status=200)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

class AllApplication(APIView):
     def get(self,request):
        allapplications=Application.objects.all()
        print(allapplications)
        All=AllApplicationserializer(allapplications,many=True)
        if All :
            return Response(All.data,status=200)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)

class PendingApplications(APIView):
     def get(self,request):
        approvedapplications=Application.objects.filter(status="PENDING")
        print(approvedapplications)
        All=AllApplicationserializer(approvedapplications,many=True)
        if All :
            return Response(All.data,status=200)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)
class ApproveApplication(APIView):
    def post(self,request,id):
        application = Application.objects.filter(id=id)
        application.update(status="APPROVED")
        return Response (200)

class ApprovedApplications(APIView):
     def get(self,request):
        approvedapplications=Application.objects.filter(status="APPROVED")
        print(approvedapplications)
        All=AllApplicationserializer(approvedapplications,many=True)
        if All :
            return Response(All.data,status=200)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)
class RejectApplication(APIView):
    def post(self,request,id):
        print('decl................................')
        application = Application.objects.filter(id=id)
        application.update(status="DECLINED")
        return Response (200)
class RejectedApplications(APIView):
     def get(self,request):
        rejectedapplications=Application.objects.filter(status="DECLINED")
        print(rejectedapplications)
        All=AllApplicationserializer(rejectedapplications,many=True)
        if All :
            return Response(All.data,status=200)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)
class CreateSlot(APIView):
    def post(self,request):
        Slot.objects.create()
        return Response(200)

class AllSlots(APIView):
     def get(self,request):
        allslots=Slot.objects.all()
        All=Slotserializer(allslots,many=True)
        if All :
            return Response(All.data,status=200)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)        


class AllotSlot(APIView):
    def post(self,request):
        body = request.body.decode('utf-8')
        body = json.loads(body)
        slotid=body['slotid']
        applicantid=body['applicantid']
        appli=Application.objects.get(id=applicantid)
        appli.allotted=True
        appli.save()
        slot=Slot.objects.get(id=slotid)
        slot.reservedby=appli
        slot.is_available=False
        slot.save()
        return Response (status=200)

class ViewDetail(APIView):
    def get(self,request,id):
        details=Application.objects.get(id=id)
        list=AllApplicationserializer(details,many =False)
        if list:
            return Response(list.data,status=status.HTTP_200_OK)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)