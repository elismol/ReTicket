# Generated by Django 4.0.2 on 2022-03-10 14:15

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('posts', '0003_alter_post_description'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='available',
        ),
        migrations.AddField(
            model_name='post',
            name='traded_with',
            field=models.ForeignKey(blank=True, default=None, null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='traded_posts', to=settings.AUTH_USER_MODEL),
        ),
    ]
