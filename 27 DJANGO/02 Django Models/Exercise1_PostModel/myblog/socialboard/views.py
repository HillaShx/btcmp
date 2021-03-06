from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render
from django.contrib.auth import authenticate
from django.contrib.auth.forms import UserCreationForm
from .models import Post

# Create your views here.

def index(request):
  posts = Post.objects.all()
  context = {"posts": posts}
  return render(request, "socialboard/index.html", context)

def register(request):
  if request.method == "POST":
    form = UserCreationForm(request.POST)
    if form.is_valid():
      new_user = form.save()
    return HttpResponse("not valid")
  else:
    form = UserCreationForm()
  return render(request, "registration/register.html", {"form": form})

def login(request):
  if request.method == "POST":
    username = request.POST['username']
    password = request.POST['password']
    user = authenticate(username=username, password=password)
    if user is not None:
      if user.is_active:
        login(request, user)
        # redirect
      else:
        return HttpResponse("user is not active")
    else:
      return HttpResponse("Invalid credentials")
  else:
    return render(request, "registration/login.html", {"next": "/"})