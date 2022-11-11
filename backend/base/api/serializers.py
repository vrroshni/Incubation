from rest_framework.serializers import ModelSerializer
from base.models import *
from rest_framework import serializers



class NoteSerializer(ModelSerializer):
    class Meta:
        model=Note
        fields='__all__'


class AllUserSerializer(ModelSerializer):
    class Meta:
        model=AllUserDetails
        fields="__all__"

class NewApplicationserializer(ModelSerializer):
    class Meta:
        model=Application
        fields="__all__"
class AllApplicationserializer(ModelSerializer):
    class Meta:
        model=Application
        fields="__all__"

class Slotserializer(ModelSerializer):
    class Meta:
        model=Slot
        fields="__all__"
    