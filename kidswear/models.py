from django.db import models

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
