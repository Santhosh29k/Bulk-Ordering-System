from rest_framework.response import Response
from rest_framework.views import APIView
from.models import SubscriptionPlan
from.serializers import SubscriptionPlanSerializer

class SubscriptionPlanListView(APIView):
    def get(self, request):
        subscription_plans = SubscriptionPlan.objects.all()
        serializer = SubscriptionPlanSerializer(subscription_plans, many=True)
        return Response(serializer.data)

class SubscriptionPlanDetailView(APIView):
    def get(self, request, pk):
        subscription_plan = SubscriptionPlan.objects.get(pk=pk)
        serializer = SubscriptionPlanSerializer(subscription_plan)
        return Response(serializer.data)