# views.py
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import get_user_model
from .models import Travel


class CheckEmailExistsView(APIView):
  def get(self, request):
    email = request.GET.get('email', None)
    User = get_user_model()
    try:
      User.objects.get(email=email)
      return Response(status=status.HTTP_200_OK)
    except User.DoesNotExist:
      return Response(status=status.HTTP_404_NOT_FOUND)

class TravelView(APIView):
  authentication_classes = [JWTAuthentication]
  permission_classes = [IsAuthenticated]

  def get(self, request):
    travel = request.GET.get('travel', None)
    TravelModel = get_travel_model()
    try:
      TravelModel.objects.get(travel=travel)
      return Response(status=status.HTTP_200_OK)
    except TravelModel.DoesNotExist:
      return Response(status=status.HTTP_404_NOT_FOUND)

  def post(self, request):
    travel = request.data.get('travel', None)
    TravelModel = get_travel_model()
    try:
      TravelModel.objects.get(travel=travel)
      return Response(status=status.HTTP_200_OK)
    except TravelModel.DoesNotExist:
      return Response(status=status.HTTP_404_NOT_FOUND)


