from rest_framework import serializers
from.models import Subscription

class SubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscription
        fields = ['id', 'branch', 'plan','start_date', 'end_date']