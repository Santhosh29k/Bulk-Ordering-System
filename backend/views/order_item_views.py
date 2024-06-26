from rest_framework.response import Response
from rest_framework.views import APIView
from.models import OrderItem
from.serializers import OrderItemSerializer

class OrderItemListView(APIView):
    def get(self, request):
        order_items = OrderItem.objects.all()
        serializer = OrderItemSerializer(order_items, many=True)
        return Response(serializer.data)

class OrderItemDetailView(APIView):
    def get(self, request, pk):
        order_item = OrderItem.objects.get(pk=pk)
        serializer = OrderItemSerializer(order_item)
        return Response(serializer.data)