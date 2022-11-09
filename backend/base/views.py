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

class AllApplication(APIView):
     def get(self,request):
        allapplications=Application.objects.all()
        print(allapplications)
        All=AllApplicationserializer(allapplications,many=True)
        if All :
            return Response(All.data,status=200)
        else:
            return Response(status=status.HTTP_404_NOT_FOUND)
