from django.db import models
from django.utils import timezone

# Create your models here.


class Choice(models.Model):
    imag_1 = models.IntegerField(default=0)
    imag_1_url = models.CharField(max_length=90,blank=True, null=True)
    imag_2 = models.IntegerField(default=0)
    imag_2_url = models.CharField(max_length=90,blank=True, null=True)
    imag_3 = models.IntegerField(default=0)
    imag_3_url = models.CharField(max_length=90,blank=True, null=True)
    imag_4 = models.IntegerField(default=0)
    imag_4_url = models.CharField(max_length=90, blank=True, null=True)
    date = models.DateTimeField(default=timezone.now, blank=True, null=True)

    def __str__(self):
       return str(self.date)
