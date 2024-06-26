from rest_framework.response import Response
from rest_framework.views import APIView
from.models import OrderDelivery
from.serializers import OrderDeliverySerializer

class OrderDeliveryListView(APIView):
    def get(self, request):
        order_deliveries = OrderDelivery.objects.all()
        serializer = OrderDeliverySerializer(order_deliveries, many=True)
        return Response(serializer.data)

class OrderDeliveryDetailView(APIView):
    def get(self, request, pk):
        order_delivery = OrderDelivery.objects.get(pk=pk)
        serializer = OrderDeliverySerializer(order_delivery)
        return Response(serializer.data)