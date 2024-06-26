from rest_framework.response import Response
from rest_framework.views import APIView
from.models import Subscription
from.serializers import SubscriptionSerializer

class SubscriptionListView(APIView):
    def get(self, request):
        subscriptions = Subscription.objects.all()
        serializer = SubscriptionSerializer(subscriptions, many=True)
        return Response(serializer.data)

class SubscriptionDetailView(APIView):
    def get(self, request, pk):
        subscription = Subscription.objects.get(pk=pk)
        serializer = SubscriptionSerializer(subscription)
        return Response(serializer.data)