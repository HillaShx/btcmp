from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, redirect, reverse
from django.contrib.auth import authenticate
from django.contrib.auth.forms import UserCreationForm
from .models import Post

# Create your views here.

def index(request):
  if not request.user.is_anonymous:
    user = authenticate(username=request.user.username, password=request.user.password)
    posts = Post.objects.all()
    context = {"posts": posts}
    return render(request, "socialboard/index.html", context)
  else:
    return redirect(reverse('socialboard:login') + "?next=/")

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
    return render(request, "registration/login.html", {"next": request.GET.get("next", "/")})

def add_post(request):
  title = request.POST['title']
  publish_date = None # check how I get the date
  content = request.POST['content']
  author = request.user.username
  