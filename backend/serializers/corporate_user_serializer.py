from rest_framework import serializers
from.models import CorporateUser

class CorporateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = CorporateUser
        fields = ['id', 'user', 'branch','mentor']