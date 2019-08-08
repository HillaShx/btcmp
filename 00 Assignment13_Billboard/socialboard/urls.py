from django.conf.urls import url
from . import views
from django.contrib.auth.views import login, logout

app_name = 'socialboard'

urlpatterns = [
  url(r'^$', views.index, name="index"),
  url(r'^register$', views.register, name="register"),
  url(r'^login$', login, name="login"),
  url(r'^logout$', logout, name="logout"),
  url(r'^delete_post$', views.delete_post, name="delete_post"),
  url(r'^send_post$', views.send_post, name="send_post"),
  # url(r'^dicard_post$', views.discard_post, name="discard_post"),
]