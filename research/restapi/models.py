from django.db import models
from django.utils import timezone

# Create your models here.


class Choice(models.Model):
    imag_1 = models.IntegerField(default=0)
    imag_2 = models.IntegerField(default=0)
    imag_3 = models.IntegerField(default=0)
    imag_4 = models.IntegerField(default=0)
    date = models.DateTimeField(default=timezone.now, blank=True, null=True)

    def __str__(self):
       return str(self.date)