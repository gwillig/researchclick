from django.db import models

# Create your models here.
class Choice(models.Model):
    imag_1 = models.IntegerField(default=0)
    imag_2 = models.IntegerField(default=0)
    imag_3 = models.IntegerField(default=0)
    imag_4 = models.IntegerField(default=0)
