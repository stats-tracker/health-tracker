from rest_framework import serializers
from tracker.models import Activity


class ActivitySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Activity
        fields = ('url', 'title')
