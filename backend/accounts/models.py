from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager

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

# class TravelPlan(models.Model):
#   user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
#   travel_stops = models.ManyToManyField('TravelStop', related_name='travel_stops')
#   is_active = models.BooleanField(default=True) 

#   def __str__(self):
#     return self.user.name

# class TravelStop(models.Model):
#   name = models.CharField(max_length=255)
#   address = models.CharField(max_length=255)
#   description = models.TextField()

#   def __str__(self):
#     return self.name
