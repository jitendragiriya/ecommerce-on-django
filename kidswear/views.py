from django.contrib import messages
from django.db.models import query
from django.http import HttpResponse
from django.shortcuts import redirect, render
from kidswear.models import Product, Order
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login as authlogin, logout as userlogout
# Create your views here.


def home(request):
    newArrivals = Product.objects.filter(sub_category='New_arrival')
    products = Product.objects.filter(sub_category='product')
    prm = {"newArrival": newArrivals, "product": products}
    return render(request, 'kidswear/home.html', prm)


def signup(request):
    if request.method == 'POST':
        # Get the post parameters
        username = request.POST['username']
        firstname = request.POST['firstname']
        lastname = request.POST['lastname']
        email = request.POST['email']
        password = request.POST['password']
        confirmPassword = request.POST['confirmPassword']
        # checking some conditions
        if(username == '' or firstname == '' or lastname == '' or email == '' or password == '' or confirmPassword == ''):
            messages.error(request, 'All fields are requied!')
            return redirect('signup')
        if(password != confirmPassword):
            messages.warning(request, 'password does not match!')
            return redirect('signup')
        else:
            user = User.objects.create_user(username, email, password)
            user.first_name = firstname
            user.last_name = lastname
            user.save()
            messages.success(request, 'Your account is created successfully.')
            return redirect('home')

    return render(request, 'kidswear/signup.html')


def login(request):
    if request.method == 'POST':
        # Get the post parameters
        logusername = request.POST['logusername']
        logpassword = request.POST['logpassword']

        user = authenticate(request, username=logusername,
                            password=logpassword)
        if user is not None:
            authlogin(request, user)
            messages.success(
                request, 'You are logedin successfully! Thank you.')
            # Redirect to a success page.
            return redirect('home')
        else:
            # Return an 'invalid login' error message.
            messages.error(request, 'Please enter valid email or password!')
            return redirect('login')

    return render(request, 'kidswear/login.html')


def logout(request):
    userlogout(request)
    messages.success(request, 'You are logout successfully.')
    return redirect('login')


def cart(request):
    return render(request, 'kidswear/cart.html')


def shipping(request):
    if request.user.is_authenticated:
        pass
    else:
        return redirect('login')
    if request.method == 'POST':
        # Get the post parameters
        items_json = request.POST['shipdata']
        address = request.POST['shipaddress']
        city = request.POST['shipcity']
        state = request.POST['shipstate']
        zip_code = request.POST['shipzipcode']
        phone_no = request.POST['shipphoneno']
        # checking some conditions
        if(items_json == '' or address == '' or city == '' or state == '' or zip_code == '' or phone_no == ''):
            messages.error(request, 'All fields are requied!')
            return redirect('shipping')
        else:
            order = Order(items_json=items_json, username=request.user.username, email=request.user.email, address=address, city=city,
                          state=state, zip_code=zip_code, phone_no=phone_no)
            order.save()
            messages.success(request, 'Your order placed successfully.')
            return redirect('home')

    return render(request, 'kidswear/shipping.html')


def productdetial(request, id):
    product = Product.objects.filter(id=id)
    newArrivals = Product.objects.filter(sub_category='New_arrival')
    productd = {'product': product, 'newArrival':newArrivals}
    return render(request, 'kidswear/productDetails.html', productd)
