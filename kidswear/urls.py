from django.urls import path
from . import views
urlpatterns = [
    path('', views.home, name="home"),
    path("<int:id>", views.productdetial, name="productDetails"),
    path("signup", views.signup, name="signup"),
    path("login", views.login, name="login"),
    path("logout", views.logout, name="logout"),
    path("cart", views.cart, name="cart"),
    path("shipping", views.shipping, name="shipping"),
]
