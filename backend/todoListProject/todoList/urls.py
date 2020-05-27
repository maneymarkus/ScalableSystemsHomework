from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    #path('index.html', views.index, name='index'),
    path('add/', views.add, name='add'),
    #path('add.html', views.add, name='add'),
    path('edit/<str:pk>', views.edit, name='edit'),
    #path('edit.html/<str:pk>', views.edit, name='edit'),
    path('impressum/', views.impressum, name='impressum'),
    #path('impressum.html', views.impressum, name='impressum'),
    path('delete/<str:pk>', views.delete, name='delete'),
    #path('delete.html/<str:pk>', views.delete, name='delete'),
    path('finish/<str:pk>', views.finish, name='finish'),
]
