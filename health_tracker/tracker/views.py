from django.shortcuts import render
from rest_framework import viewsets
from tracker.models import Activity
from tracker.serializers import ActivitySerializer


class ActivityViewSet(viewsets.ModelViewSet):
    model = Activity
    serializer_class = ActivitySerializer
    queryset = Activity.objects.all()


