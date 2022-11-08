from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view,permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.views import APIView
from .serializers import *
from base.models import *
import json


from django.contrib.auth.hashers import make_password


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        print('loginnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn')
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

@api_view(['GET'])
def getRoutes(request):
    routes=[
        '/api/token',
        '/api/token/refresh'
    ]
    return Response(routes)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getNotes(request):
    user=request.user
    notes=user.note_set.all()
    serializer=NoteSerializer(notes,many=True)
    return Response(serializer.data)


class UserSignup(APIView):
    def post(self,request):
        body = request.body.decode('utf-8')
        body = json.loads(body)
        username = body['username']
        email = body['email']
        password=body['password']
        print(password)
        user= User.objects.create(username=username,
         email=email)
        print(password)
        user.make_password(password)
        user.save()
        
        return Response(200)
