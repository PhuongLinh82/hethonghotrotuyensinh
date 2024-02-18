# Generated by Django 5.0.1 on 2024-02-16 12:59

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('admissions', '0004_alter_mark_major_alter_mark_year'),
    ]

    operations = [
        migrations.AlterField(
            model_name='mark',
            name='major',
            field=models.ForeignKey(blank=True, default=None, on_delete=django.db.models.deletion.CASCADE, related_name='majorfk', to='admissions.major'),
        ),
        migrations.AlterField(
            model_name='mark',
            name='year',
            field=models.ForeignKey(blank=True, default=None, on_delete=django.db.models.deletion.CASCADE, related_name='yearfk', to='admissions.year'),
        ),
    ]
