from rest_framework import serializers
from rest_framework.reverse import reverse
from tracker.models import Activity, Stat


class ActivitySerializer(serializers.HyperlinkedModelSerializer):
    _links = serializers.SerializerMethodField()

    class Meta:
        model = Activity
        fields = ('id', 'url', 'title', '_links')

    def get__links(self, obj):
        links = {
            "stats": reverse('stats', kwargs=dict(activity_id=obj.id),
                             request=self.context.get('request'))}
        return links


class StatSerializer(serializers.HyperlinkedModelSerializer):
    activity = serializers.HyperlinkedIdentityField(read_only=True, source='activity', view_name='activity-detail')
    date = serializers.DateField()

    class Meta:
        model = Stat
        fields = ('id', 'url', 'date', 'number', 'activity')
