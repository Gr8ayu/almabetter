from django.shortcuts import render
# from rest_framework import viewsets
from .serializers import ScoreSerializer
from .models import Score
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.views import APIView
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from rest_framework.permissions import AllowAny
from braces.views import CsrfExemptMixin

# Create your views here.
def index(request):
    return render(request, "app/build/index.html")



@api_view(['GET'])
def leaderboard(request):

    data = Score.objects.all()
    serializer = ScoreSerializer(data, many=True)
    return Response(serializer.data)


class addscore(APIView):



    def post(self, request):
        data = request.data
        try:
            data['total'] =  int(data['maths']) + int(data['physics']) + int(data['chemistry'])
            # print(serializer.data)
            data['percentage'] =  data['total']/3
            
            serializer = ScoreSerializer(data=data)
        except Exception as e:
            pass

        serializer = ScoreSerializer(data=data)
        
        if serializer.is_valid():
        
            serializer.save()  
            return Response(serializer.data)
        else:
            # print(serializer.errors)
            return Response(serializer.errors, status=400)


