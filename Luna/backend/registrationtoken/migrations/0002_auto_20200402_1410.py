# Generated by Django 3.0.5 on 2020-04-02 14:10

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('registrationtoken', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='emailtoken',
            old_name='emailverifiction',
            new_name='emailverification',
        ),
    ]
