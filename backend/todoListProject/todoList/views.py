from django.shortcuts import render, get_object_or_404, redirect
from django.http import HttpResponse
from django.http import JsonResponse
from .models import *

# Create your views here.

def index(request):

    todo_list = Todo.objects.order_by('date')

    context = {'todo_list' :todo_list}

    return render(request, 'todoList/index.html', context)


def add(request):

    if request.method == 'POST':
        deadline = request.POST.get('deadline', '')
        task = request.POST.get('task', 'Keine Aufgabe')
        trackProgress = False
        progress = 0
        if request.POST.get('trackProgress', 'off') == "on":
            trackProgress = True
            progress = request.POST.get('progress', 0)
        done = False
        newTodo = Todo(text=task, date=deadline, trackProgress=trackProgress, progress=progress, done=done)
        newTodo.save()
        return redirect('/')

    return render(request, 'todoList/add.html')


def edit(request, pk):

    todo = Todo.objects.get(id=pk)

    if request.method == 'POST':
        deadline = request.POST.get('deadline', '')
        task = request.POST.get('task', 'No value')
        trackProgress = False
        progress = 0
        if request.POST.get('trackProgress', 'off') == "on":
            trackProgress = True
            progress = request.POST.get('progress', 0)
        done = todo.done
        if progress == 100 and done != True:
            done = True
        todo.date = deadline
        todo.text = task
        todo.trackProgress = trackProgress
        todo.progress = progress
        todo.done = done
        todo.save()
        return redirect('/')

    context = {'todo' : todo}

    return render(request, 'todoList/edit.html', context)


def impressum(request):

    return render(request, 'todoList/impressum.html')


def delete(request, pk):

    todo = Todo.objects.get(id=pk)

    if request.method == 'POST':
        todo.delete()
        return HttpResponse(status=204)


def finish(request, pk):

    todo = Todo.objects.get(id=pk)

    if request.method == 'POST':
        todo.done = True
        todo.progress = 100
        todo.save()
        return HttpResponse(status=204)
