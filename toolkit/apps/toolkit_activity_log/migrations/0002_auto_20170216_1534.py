# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2017-02-16 21:34
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('toolkit_activity_log', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='toolkitactivitylog',
            name='ip_address',
            field=models.CharField(blank=True, max_length=40),
        ),
        migrations.AddField(
            model_name='toolkitactivitylog',
            name='user_agent',
            field=models.CharField(blank=True, max_length=512),
        ),
    ]