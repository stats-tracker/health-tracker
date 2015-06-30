from django.db import models

class Activity(models.Model):
    title = models.CharField(max_length=255)

    class Meta:
        verbose_name_plural = "activities"

    def __str__(self):
        return self.title

class Stat(models.Model):
    date = models.DateField()
    number = models.IntegerField()
    activity = models.ForeignKey(Activity, null=True)

    class Meta:
        unique_together = ('date', 'activity')

    def __str__(self):
        return "{}/{}: {}".format(self.date, self.activity, self.number)
