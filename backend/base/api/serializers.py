from rest_framework.serializers import ModelSerializer
from base.models import *


class NoteSerializer(ModelSerializer):
    class Meta:
        model=Note
        fields='__all__'


class AllUserSerializer(ModelSerializer):
    class Meta:
        model=AllUserDetails
        fields="__all__"
