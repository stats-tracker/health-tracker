from django.db import models

class Activity(models.Model):
    title = models.CharField(max_length=255)

class Stat(models.Model):
    date = models.DateField()
    number = models.IntegerField()
    activity = models.ForeignKey(Activity)
