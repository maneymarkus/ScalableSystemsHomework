from django.db import models

# Create your models here.

class Todo(models.Model):
    text = models.CharField(max_length=160)
    date = models.DateField()
    progress = models.IntegerField(default=0)
    trackProgress = models.BooleanField(default=True)
    done = models.BooleanField(default=False)


    def __str__(self):
        return self.text

    def insertDateInInput(self):
        return self.date.strftime("%Y-%m-%d")
