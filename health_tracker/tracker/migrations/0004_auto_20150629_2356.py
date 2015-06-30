# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tracker', '0003_auto_20150629_2151'),
    ]

    operations = [
        migrations.AlterField(
            model_name='stat',
            name='activity',
            field=models.ForeignKey(null=True, to='tracker.Activity'),
        ),
    ]
