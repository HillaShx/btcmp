from django.conf.urls import url
from . import views

urlpatterns = [
  url(r'^$', views.index, name="index"),
  url(r'^list$', views.list_colors, name="list"),
  url(r'^add/(?P<color_name>[a-z0-9]+)/$', views.add_color, name='add'),
  url(r'^get/(?P<color_name>[a-z0-9]+)/$', views.get_color, name='get'),
]