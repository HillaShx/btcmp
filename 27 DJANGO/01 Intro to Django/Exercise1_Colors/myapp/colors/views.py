from django.shortcuts import render, redirect
from django.http import HttpResponse, JsonResponse
import json

# Create your views here.
from django.http import HttpResponse

colors = ["color1", "color2", "color3", "color4", "color5"]

def index(request):
  return HttpResponse("Yoohoo")

def list_colors(request):
  context = {"colors_list": colors}
  return render(request, 'colors/list.html', context)

def add_color(request, color_name):
  if color_name in colors:
    return JsonResponse({"error_msg": "color already in our database"})
  colors.append(color_name)
  return JsonResponse({'success_msg':'color added'})

def get_color(request, color_name):
  return HttpResponse(color_name)