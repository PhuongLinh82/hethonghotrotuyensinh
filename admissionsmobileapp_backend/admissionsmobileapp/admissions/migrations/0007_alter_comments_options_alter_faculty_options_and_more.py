# Generated by Django 5.0.1 on 2024-02-17 14:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('admissions', '0006_alter_user_isadviser_alter_user_iscandidate'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='comments',
            options={'ordering': ['id']},
        ),
        migrations.AlterModelOptions(
            name='faculty',
            options={'ordering': ['-id']},
        ),
        migrations.AlterModelOptions(
            name='information',
            options={'ordering': ['id']},
        ),
        migrations.AlterModelOptions(
            name='informationsection',
            options={'ordering': ['id']},
        ),
        migrations.AlterModelOptions(
            name='major',
            options={'ordering': ['id']},
        ),
        migrations.AlterModelOptions(
            name='mark',
            options={'ordering': ['id']},
        ),
        migrations.AlterModelOptions(
            name='questions',
            options={'ordering': ['id']},
        ),
        migrations.AlterModelOptions(
            name='year',
            options={'ordering': ['id']},
        ),
        migrations.AlterField(
            model_name='information',
            name='image',
            field=models.ImageField(default=None, upload_to='information/%Y/%m'),
        ),
        migrations.AlterField(
            model_name='user',
            name='avatar',
            field=models.ImageField(upload_to='avatar/%Y/%m'),
        ),
    ]
