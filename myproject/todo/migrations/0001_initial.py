# Generated by Django 3.0.6 on 2020-05-25 09:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Todo',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('todo_text', models.CharField(max_length=160)),
                ('todo_progress', models.IntegerField()),
                ('todo_date', models.DateField()),
                ('todo_done', models.BooleanField(default=False)),
            ],
        ),
    ]