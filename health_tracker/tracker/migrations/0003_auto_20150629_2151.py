# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tracker', '0002_auto_20150629_1856'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='stat',
            unique_together=set([('date', 'activity')]),
        ),
    ]
