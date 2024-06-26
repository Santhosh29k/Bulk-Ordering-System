from rest_framework import serializers
from.models import DeliveryLocation

class DeliveryLocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeliveryLocation
        fields = ['id', 'address', 'branch', 'contact_person', 'instructions']