# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2019-08-01 14:03
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=120)),
                ('publish_date', models.DateTimeField()),
                ('content', models.CharField(max_length=500)),
                ('author', models.CharField(max_length=24)),
            ],
        ),
    ]
