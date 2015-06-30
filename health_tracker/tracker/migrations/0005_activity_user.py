# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations
from django.conf import settings


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('tracker', '0004_auto_20150629_2356'),
    ]

    operations = [
        migrations.AddField(
            model_name='activity',
            name='user',
            field=models.ForeignKey(to=settings.AUTH_USER_MODEL, null=True),
        ),
    ]
