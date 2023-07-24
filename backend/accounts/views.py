# views.py
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import get_user_model

class CheckEmailExistsView(APIView):
  def get(self, request):
    email = request.GET.get('email', None)
    User = get_user_model()
    try:
      User.objects.get(email=email)
      return Response(status=status.HTTP_200_OK)
    except User.DoesNotExist:
      return Response(status=status.HTTP_404_NOT_FOUND)
