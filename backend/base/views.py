from django.shortcuts import render
from base.api.serializers import *
from base.models import *
from rest_framework.views import APIView
from rest_framework.response import Response
import json




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