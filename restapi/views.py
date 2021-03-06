from django.shortcuts import render
import datetime

from django.http import JsonResponse
import json
from restapi.models import Choice
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from datetime import datetime
from django.http import HttpResponse
from pytz import timezone
from django.db.models.functions import TruncDay
from django.db.models import Count
import pandas as pd



@csrf_exempt
def getdata(request):
    data_dict={}
    data_dict["all_records"] = Choice.objects.all().count()
    ######## Create data for moods
	#1.Step: Get all unique moods
    moods_queryset = Choice.objects.values('mood').distinct()
	#2.Step: count
    mood_list =  moods_queryset.values_list('mood', flat=True)
    data_dict["pieChart"]= []
    for element in mood_list:
        value_element = Choice.objects.filter(mood=element).count()
        #Convert the response so that the response  is ready for highchart pie chart
        data_dict["pieChart"].append({"name": element,"y": value_element})

    ####### Create data for records_per_day
    records_per_day = Choice.objects.annotate(day=TruncDay('date')).values('day').annotate(records=Count('id'))
    proc_records_per_day=[]
    for exp in records_per_day:
        proc_records_per_day.append([exp['day'].timestamp()*1000,exp['records']])

    data_dict["lineChart"]= proc_records_per_day
    ##Cummulate
    df = pd.DataFrame(proc_records_per_day)
    df["cum"] = df[1].cumsum()
    data_dict["colChart"]=df[[0,"cum"]].values.tolist()

    return JsonResponse(data_dict)

@csrf_exempt
def result(request):
    """
    @description:
        url for the rest-api to save the repsone form the participants
    """
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
        mood   = ds["mood"],
        note_1 = ds["note"],
        date   = time_now)
    newResponse.save()
    print("Fetch successfully saved to databank")
    response = {'Repsonse': "Answer successfully saved to databank"}
    return JsonResponse(response)
