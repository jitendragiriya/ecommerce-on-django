# Generated by Django 4.0 on 2021-12-12 04:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kidswear', '0006_rename_name_order_username'),
    ]

    operations = [
        migrations.AddField(
            model_name='order',
            name='placed_At',
            field=models.DateField(default=''),
            preserve_default=False,
        ),
    ]
