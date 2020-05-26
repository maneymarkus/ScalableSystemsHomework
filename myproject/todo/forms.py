from django import forms
from django.forms import ModelForm

from .models import *

class TodoForm(forms.ModelForm):

        class Meta:
            model = Todo
            fields = '__all__'

""" 
    text = forms.CharField(
        max_length=160,
        widget=forms.TextInput(
            attrs={'class' : 'form-control'}
        ))


    date = forms.DateField(
        widget=forms.widgets.DateInput(
            attrs={'type': 'date', 'class':'form-control'}))

        
    track = forms.BooleanField(
        widget=forms.widgets.CheckboxInput(
        )
    )        
    progress = forms.IntegerField()
    
    done = forms.BooleanField() """



