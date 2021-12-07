from django.shortcuts import render
from kidswear.models import Product
# Create your views here.


def index(request):
    newArrivals = Product.objects.filter(sub_category='New_arrival')
    products = Product.objects.filter(sub_category='product')
    prm = {"newArrival": newArrivals, "product": products}
    return render(request, 'kidswear/index.html', prm)
