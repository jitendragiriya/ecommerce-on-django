# Generated by Django 3.2.9 on 2021-12-07 09:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('kidswear', '0002_rename_products_product'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='sub_category',
            field=models.CharField(default='', max_length=25),
        ),
    ]
