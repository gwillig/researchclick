from django.shortcuts import render
import datetime

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from restapi.models import Choice


@csrf_exempt
def result(request):
    print(request)
    newResponse = Choice(imag_1=1,imag_2=2,imag_3=3,imag_4=3,date=datetime.datetime.now())
    newResponse.save()
    response = {'newTheme': "theme"}

    return JsonResponse(response)