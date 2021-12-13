from django.db import models
from datetime import datetime
# Create your models here.


class Product(models.Model):
    product_id = models.AutoField
    product_name = models.CharField(max_length=50)
    category = models.CharField(max_length=25, default='')
    sub_category = models.CharField(max_length=25, default='')
    price = models.IntegerField()
    desc = models.CharField(max_length=300)
    added_At = models.DateField()
    image = models.ImageField(upload_to='kidswear/images')

    def __str__(self):
        return self.product_name


class Order(models.Model):
    order_id = models.AutoField(primary_key=True)
    items_json = models.CharField(max_length=5000)
    username = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    address = models.CharField(max_length=200)
    city = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    zip_code = models.CharField(max_length=10)
    phone_no = models.CharField(max_length=10)
    placed_At = models.DateTimeField(default=datetime.now, blank=True)

    def __str__(self):
        return self.username +' '+ str(self.placed_At)[:10]
