from rest_framework.response import Response
from rest_framework.views import APIView
from.models import DeliveryLocation
from.serializers import DeliveryLocationSerializer

class DeliveryLocationListView(APIView):
    def get(self, request):
        delivery_locations = DeliveryLocation.objects.all()
        serializer = DeliveryLocationSerializer(delivery_locations, many=True)
        return Response(serializer.data)

class DeliveryLocationDetailView(APIView):
    def get(self, request, pk):
        delivery_location = DeliveryLocation.objects.get(pk=pk)
        serializer = DeliveryLocationSerializer(delivery_location)
        return Response(serializer.data)