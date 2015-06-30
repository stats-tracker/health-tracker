from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
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


class StatUpdateSerializer(serializers.HyperlinkedModelSerializer):
    activity = serializers.HyperlinkedIdentityField(read_only=True, source='activity', view_name='activity-detail')
    date = serializers.DateField(read_only=True)

    class Meta:
        model = Stat
        fields = ('id', 'url', 'date', 'number', 'activity', 'pk')


class UserSerializer(serializers.HyperlinkedModelSerializer):
    total_clicks = serializers.IntegerField(source='num_clicks', read_only=True)
    activity_set = ActivitySerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ('id', 'url', 'username', 'email', 'total_clicks', 'bookmark_set', 'password')
        write_only_fields = ('password',)

    def create(self, validated_data):
        user = super().create(validated_data)
        user.set_password(validated_data['password'])
        user.save()

        user = authenticate(username=user.username,
                            password=validated_data['password'])

        login(self.context.get('request'), user)

        return user

