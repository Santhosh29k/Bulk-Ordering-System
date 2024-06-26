from rest_framework.response import Response
from rest_framework.views import APIView
from.models import IndividualUser
from.serializers import IndividualUserSerializer

class IndividualUserListView(APIView):
    def get(self, request):
        individual_users = IndividualUser.objects.all()
        serializer = IndividualUserSerializer(individual_users, many=True)
        return Response(serializer.data)

class IndividualUserDetailView(APIView):
    def get(self, request, pk):
        individual_user = IndividualUser.objects.get(pk=pk)
        serializer = IndividualUserSerializer(individual_user)
        return Response(serializer.data)