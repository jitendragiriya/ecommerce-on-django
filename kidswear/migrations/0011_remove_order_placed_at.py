# Generated by Django 4.0 on 2021-12-12 05:01

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('kidswear', '0010_alter_order_placed_at'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='placed_At',
        ),
    ]
