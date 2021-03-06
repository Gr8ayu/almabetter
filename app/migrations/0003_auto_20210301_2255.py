# Generated by Django 3.1.7 on 2021-03-01 22:55

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_auto_20210301_1917'),
    ]

    operations = [
        migrations.AlterField(
            model_name='score',
            name='chemistry',
            field=models.FloatField(default=0, validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(100)]),
        ),
        migrations.AlterField(
            model_name='score',
            name='maths',
            field=models.FloatField(default=0, validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(100)]),
        ),
        migrations.AlterField(
            model_name='score',
            name='percentage',
            field=models.FloatField(default=0),
        ),
        migrations.AlterField(
            model_name='score',
            name='physics',
            field=models.FloatField(default=0, validators=[django.core.validators.MinValueValidator(1), django.core.validators.MaxValueValidator(100)]),
        ),
        migrations.AlterField(
            model_name='score',
            name='total',
            field=models.FloatField(default=0),
        ),
    ]
