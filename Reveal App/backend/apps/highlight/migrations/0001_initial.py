# Generated by Django 3.0.5 on 2020-04-22 08:02

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('document', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Highlight',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('starting_point', models.IntegerField(verbose_name='starting point')),
                ('ending_point', models.IntegerField(verbose_name='ending point')),
                ('selection', models.TextField(verbose_name='text highlighted')),
                ('suggested', models.BooleanField(default=False, verbose_name='Generated by the backend model')),
                ('score', models.FloatField(blank=True, null=True, verbose_name='Score of the suggested selection')),
                ('accepted', models.BooleanField(blank=True, default=None, null=True)),
                ('date_created', models.DateTimeField(auto_now_add=True, verbose_name='created time')),
                ('date_updated', models.DateTimeField(auto_now=True, verbose_name='updated')),
                ('id_parent_highlight', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='fk_highlight_to_highlight', to='highlight.Highlight', verbose_name='Parent highlight')),
                ('id_pdf', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='fk_highlight_to_pdf', to='document.PDF', verbose_name='pdf')),
            ],
            options={
                'ordering': ['-date_updated'],
            },
        ),
    ]
