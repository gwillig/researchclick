# Generated by Django 2.1.4 on 2019-05-12 11:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restapi', '0005_auto_20190512_1230'),
    ]

    operations = [
        migrations.AlterField(
            model_name='choice',
            name='note_1',
            field=models.TextField(blank=True, default='None', null=True),
        ),
    ]
