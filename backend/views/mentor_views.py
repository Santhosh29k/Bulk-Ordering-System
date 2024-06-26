from rest_framework.response import Response
from rest_framework.views import APIView
from.models import Mentor
from.serializers import MentorSerializer

class MentorListView(APIView):
    def get(self, request):
        mentors = Mentor.objects.all()
        serializer = MentorSerializer(mentors, many=True)
        return Response(serializer.data)

class MentorDetailView(APIView):
    def get(self, request, pk):
        mentor = Mentor.objects.get(pk=pk)
        serializer = MentorSerializer(mentor)
        return Response(serializer.data)