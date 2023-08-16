from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.contrib.auth import get_user_model

class UserAccountManager(BaseUserManager):
  def create_user(self, email, name, password=None):
    if not email:
      raise ValueError("Adicione um email valido")

    email = self.normalize_email(email)
    user = self.model(email=email, name=name)

    user.set_password(password)
    user.save()

    return user

class UserAccount(AbstractBaseUser, PermissionsMixin):
  email = models.EmailField(max_length=255, unique=True)
  name = models.CharField(max_length=255)
  is_active = models.BooleanField(default=True) 
  is_staff = models.BooleanField(default=False)

  objects = UserAccountManager()

  USERNAME_FIELD = 'email'
  REQUIRED_FIELDS = ['name']

  def get_full_name(self):
    return self.name
  
  def get_short_name(self):
    return self.name

  def __str__(self):
    return self.email

User = get_user_model()

class Travel(models.Model):
  start_location_id = models.CharField(max_length=255)
  end_location_id = models.CharField(max_length=255)
  stops_locations_ids = models.CharField(max_length=255)
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  created_at = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return self.start_location_id + ' - ' + self.end_location_id
