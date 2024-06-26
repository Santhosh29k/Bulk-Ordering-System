from rest_framework import serializers
from.models import SubscriptionPlanDish

class SubscriptionPlanDishSerializer(serializers.ModelSerializer):
    class Meta:
        model = SubscriptionPlanDish
        fields = ['id','subscription_plan', 'dish', 'quantity']