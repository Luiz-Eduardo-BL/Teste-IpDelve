from djoser.serializers import UserCreateSerializer
from django.contrib.auth import get_user_model
from rest_framework import serializers
# from .models import TravelPlan

User = get_user_model()

class UserCreateSerializer(UserCreateSerializer):
  class Meta(UserCreateSerializer.Meta):
    model = User
    fields = ('id', 'email', 'first_name', 'last_name', 'password')

# class TravelPlanSerializer(serializers.ModelSerializer):
#   class Meta:
#     model = TravelPlan
#     fields = '__all__'

# class UserSerializer(serializers.ModelSerializer):
#   class Meta:
#     model = User
#     fields = '__all__'