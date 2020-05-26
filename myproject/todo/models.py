from django.db import models

class Todo(models.Model):
    text = models.CharField(max_length=160)
    date = models.DateField()
    progress = models.IntegerField(default='0')
    track = models.BooleanField(default=True)
    done = models.BooleanField(default=False)
    

    def __str__(self):
        return self.text
