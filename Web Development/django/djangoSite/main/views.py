import imp
from operator import imod
from django.shortcuts import render
from django.http import HttpResponse, HttpResponsePermanentRedirect, HttpResponseRedirect
from .models import ToDoList, Item
from .forms import CreateNewList

# Create your views here.

def index(response, id):
    ls = ToDoList.objects.get(id=id)
    
    # if response.mehtod == "POST":
    #     if response.POST.get("save"):
            
    #     elif response.POST.get('newItem'):
            
    
    return render(response, "main/list.html", {"ls": ls})

def home(response):
    return render(response, "main/home.html", {})

def create(response):
    if response.method == "POST":
        form = CreateNewList(response.POST)
        
        if form.is_valid():
            n = form.cleaned_data['name']
            t = ToDoList(name=n)
            t.save()
        return HttpResponseRedirect("/%i" %t.id)
        
    else:
        form = CreateNewList()
        
    return render (response, "main/create.html", {"form": form})

