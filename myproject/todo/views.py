from django.shortcuts import render, redirect

from .models import *
from .forms import *

def index(request):
    todo_list = Todo.objects.order_by('id')

    form = TodoForm()

    if request.method == 'POST':
        form = TodoForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/index.html')

    context = {'todo_list' :todo_list}
    
    return render(request, 'todo/index.html', context)

def add(request):   

    form = TodoForm()

    context ={'form' : form}

    return render(request, 'todo/add.html', context) 

def edit(request, pk):
    todo = Todo.objects.get(id=pk)

    form = TodoForm(instance=todo)

    if request.method == 'POST':
        form = TodoForm(request.POST, instance=todo)
        if form.is_valid():
            form.save()
            return redirect('/index.html')

    context = {'form' : form}

    return render(request, 'todo/edit.html', context) 

def delete(request, pk):
    item = Todo.objects.get(id=pk)

    if request.method == 'POST':
        item.delete()
        return redirect('/index.html')
    context = {'item':item}
    return render(request, 'todo/delete.html', context)


def impressum(request):

    return render(request, 'todo/impressum.html')    
