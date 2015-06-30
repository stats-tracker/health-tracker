from rest_framework import viewsets, generics
from tracker.models import Activity, Stat
from tracker.serializers import ActivitySerializer, StatSerializer


class ActivityViewSet(viewsets.ModelViewSet):
    model = Activity
    serializer_class = ActivitySerializer
    queryset = Activity.objects.all()


class StatView(generics.ListCreateAPIView):
    serializer_class = StatSerializer
    queryset = Stat.objects.all()

    def perform_create(self, serializer):
        serializer.save(activity=Activity.objects.get(pk=self.kwargs['activity_id']))


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
