from django.shortcuts import render
import datetime

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from restapi.models import Choice
from django.utils.decorators import method_decorator



@method_decorator(csrf_exempt)
def result(request):
    data = request.body
    convert = data.decode("utf-8")
    ds = json.loads(convert)
    username = ds["0"]
    print(username)
    newResponse = Choice(
        imag_1=ds["0"][0],imag_1_url=ds["0"][1],
        imag_2=ds["2"][0],imag_2_url=ds["2"][1],
        imag_3=ds["3"][0], imag_3_url=ds["3"][1],
        imag_4=ds["4"][0], imag_4_url=ds["3"][1],
        date=datetime.datetime.now())
    newResponse.save()
    response = {'newTheme': "theme"}

    return JsonResponse(response)
