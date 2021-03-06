# Generated by Django 3.1.7 on 2021-03-01 12:06

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Score',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=120)),
                ('rollno', models.PositiveIntegerField(unique=True)),
                ('maths', models.PositiveIntegerField(default=0)),
                ('physics', models.PositiveIntegerField(default=0)),
                ('chemistry', models.PositiveIntegerField(default=0)),
                ('total', models.PositiveIntegerField(default=0)),
                ('percentage', models.PositiveIntegerField(default=0)),
            ],
        ),
    ]
