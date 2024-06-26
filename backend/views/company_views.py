from rest_framework.response import Response
from rest_framework.views import APIView
from.models import Company
from.serializers import CompanySerializer

class CompanyListView(APIView):
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data)

class CompanyDetailView(APIView):
    def get(self, request, pk):
        company = Company.objects.get(pk=pk)
        serializer = CompanySerializer(company)
        return Response(serializer.data)