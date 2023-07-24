from django.urls import path, include, re_path
from django.views.generic import TemplateView
from accounts.views import CheckEmailExistsView

urlpatterns = [
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.jwt')),
    path('auth/check-email/', CheckEmailExistsView.as_view()),
]

urlpatterns += [re_path(r'^.*', TemplateView.as_view(template_name='index.html'))]