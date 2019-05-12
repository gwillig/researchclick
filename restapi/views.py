from django.shortcuts import render
import datetime

from django.http import JsonResponse
import json
from restapi.models import Choice
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from datetime import datetime
from pytz import timezone

@csrf_exempt
def result(request):
    #1.Step: Get the information from the fetch body
    data = request.body
    convert = data.decode("utf-8")
    ds = json.loads(convert)
    #2.Step: Get the time now
    now_utc = datetime.now(timezone('UTC'))
    time_now = now_utc.astimezone(timezone('Europe/Berlin'))
    print(time_now)
    #3.Step: Create new object to save the answers
    newResponse = Choice(
        imag_1 = ds["0"][0],imag_1_url=ds["0"][1],
        imag_2 = ds["1"][0],imag_2_url=ds["1"][1],
        imag_3 = ds["2"][0], imag_3_url=ds["2"][1],
        imag_4 = ds["3"][0], imag_4_url=ds["3"][1],
        imag_5 = ds["4"][0], imag_5_url=ds["4"][1],
        imag_6 = ds["5"][0], imag_6_url=ds["5"][1],
        mood   = ds["value"],
        date   = time_now)
    newResponse.save()
    print("11Fetch successfully saved to databank")
    response = {'Repsonse': "Answer successfully saved to databank"}
    return JsonResponse(response)
