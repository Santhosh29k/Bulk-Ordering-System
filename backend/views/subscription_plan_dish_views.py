from rest_framework.response import Response
from rest_framework.views import APIView
from.models import SubscriptionPlanDish
from.serializers import SubscriptionPlanDishSerializer

class SubscriptionPlanDishListView(APIView):
    def get(self, request):
        subscription_plan_dishes = SubscriptionPlanDish.objects.all()
        serializer = SubscriptionPlanDishSerializer(subscription_plan_dishes, many=True)
        return Response(serializer.data)

class SubscriptionPlanDishDetailView(APIView):
    def get(self, request, pk):
        subscription_plan_dish = SubscriptionPlanDish.objects.get(pk=pk)
        serializer = SubscriptionPlanDishSerializer(subscription_plan_dish)
        return Response(serializer.data)