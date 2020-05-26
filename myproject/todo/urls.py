from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('index.html', views.index),
    path('add.html', views.add, name='add'),
    path('edit.html/<str:pk>', views.edit, name='edit'),
    path('impressum.html', views.impressum, name='impressum'),
    path('delete.html/<str:pk>', views.delete, name='delete'),

]
