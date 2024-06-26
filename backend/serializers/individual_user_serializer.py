from rest_framework import serializers
from.models import IndividualUser

class IndividualUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = IndividualUser
        fields = ['id', 'user', 'corporate_user']