from rest_framework.response import Response
from rest_framework.views import APIView
from.models import CorporateUser
from.serializers import CorporateUserSerializer

class CorporateUserListView(APIView):
    def get(self, request):
        corporate_users = CorporateUser.objects.all()
        serializer = CorporateUserSerializer(corporate_users, many=True)
        return Response(serializer.data)

class CorporateUserDetailView(APIView):
    def get(self, request, pk):
        corporate_user = CorporateUser.objects.get(pk=pk)
        serializer = CorporateUserSerializer(corporate_user)
        return Response(serializer.data)