from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .models import Job
from .serializers.common import JobSerializer

class JobListView(APIView):

  def get(self, _request):
    jobs = Job.objects.all()
    serialized_job = JobSerializer(jobs, many=True)
    return Response(serialized_job.data, status=status.HTTP_200_OK)