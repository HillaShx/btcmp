from django.conf.urls import url
from . import views
from django.contrib.auth.views import login

app_name = 'socialboard'

urlpatterns = [
  url(r'^$', views.index, name="index"),
  url(r'^register/$', views.register, name="register"),
  url(r'^login/$', login, name="login"),
]