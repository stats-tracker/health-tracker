from django.db import IntegrityError
from rest_framework import viewsets, generics
from rest_framework.exceptions import NotAcceptable
from rest_framework.mixins import UpdateModelMixin
from tracker.models import Activity, Stat
from tracker.serializers import ActivitySerializer, StatSerializer, StatUpdateSerializer


class ActivityViewSet(viewsets.ModelViewSet):
    model = Activity
    serializer_class = ActivitySerializer
    queryset = Activity.objects.all()


class StatView(generics.ListCreateAPIView, UpdateModelMixin):
    serializer_class = StatSerializer
    queryset = Stat.objects.all()

    def perform_create(self, serializer):
        try:
            serializer.save(activity=Activity.objects.get(pk=self.kwargs['activity_id']))
        except IntegrityError:
            raise NotAcceptable('Data for this day already exists. Please update existing data instead.')


class StatUpdate(generics.RetrieveUpdateDestroyAPIView):
    model = Stat
    serializer_class = StatUpdateSerializer
    queryset = Stat.objects.all()
