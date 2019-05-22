from django.db import models
from django.utils import timezone

class Choice(models.Model):
    imag_1      = models.IntegerField(default=0)
    imag_1_url  = models.CharField(max_length=90,blank=True, null=True)
    imag_2      = models.IntegerField(default=0)
    imag_2_url  = models.CharField(max_length=90,blank=True, null=True)
    imag_3      = models.IntegerField(default=0)
    imag_3_url  = models.CharField(max_length=90,blank=True, null=True)
    imag_4      = models.IntegerField(default=0)
    imag_4_url  = models.CharField(max_length=90, blank=True, null=True)
    imag_5      = models.IntegerField(default=0)
    imag_5_url  = models.CharField(max_length=90, blank=True, null=True)
    imag_6      = models.IntegerField(default=0)
    imag_6_url  = models.CharField(max_length=90, blank=True, null=True)
    date        = models.DateTimeField(default=timezone.now, blank=True, null=True)
    note_1      = models.TextField(default="None",blank=True, null=True)
    note_2      = models.TextField(blank=True, null=True)
    note_3      = models.TextField(blank=True, null=True)
    mood        =  models.CharField(max_length=40,blank=True, null=True)

    def __str__(self):
       return str(self.date)
