from django.db import IntegrityError
from rest_framework import viewsets, generics
from rest_framework.mixins import UpdateModelMixin
from rest_framework.response import Response
from tracker.models import Activity, Stat
from tracker.serializers import ActivitySerializer, StatSerializer


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
            # pk = Stat.objects.filter(activity=Activity.objects.get(pk=self.kwargs['activity_id'])).get(date=serializer.validated_data['date']).id
            # self.partial_update(self.request)
            instance = Stat.objects.filter(activity=Activity.objects.get(pk=self.kwargs['activity_id'])).filter(
                date=serializer.validated_data['date'])[0]
            serializer = self.get_serializer(instance, data=self.request.data, partial=True)
            serializer.is_valid(raise_exception=True)
            self.perform_update(serializer)
            return Response(serializer.data)


class StatUpdate(generics.RetrieveUpdateDestroyAPIView):
    model = Stat
    serializer_class = StatSerializer
    queryset = Stat.objects.all()


    # class StatView(APIView):
    #     def get(self, request, activity_id):
    #         stats = {str(stat.date): [stat.number] for stat in
    #                  Stat.objects.filter(activity__id=activity_id)}
    #         return Response(stats)
    #
    # class StatDetail(RetrieveDestroyAPIView):
    #     model = Stat
    #     queryset = Stat.objects.all()
    #     serializer_class = StatSerializer
