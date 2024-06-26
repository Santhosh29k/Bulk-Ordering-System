from rest_framework.response import Response
from rest_framework.views import APIView
from.models import Branch
from.serializers import BranchSerializer

class BranchListView(APIView):
    def get(self, request):
        branches = Branch.objects.all()
        serializer = BranchSerializer(branches, many=True)
        return Response(serializer.data)

class BranchDetailView(APIView):
    def get(self, request, pk):
        branch = Branch.objects.get(pk=pk)
        serializer = BranchSerializer(branch)
        return Response(serializer.data)