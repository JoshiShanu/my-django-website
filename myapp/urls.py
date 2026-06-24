from django.contrib import admin
from django.urls import path
from myapp import views

urlpatterns = [

    path('admin/',admin.site.urls),

    path( '',views.index,name='index'),

    path('books/',views.books,name='books'),

    path('slippers/',views.slippers,name='slippers'),

    path('clothings/',views.clothing,name='clothing'),

    path('carts/',views.carts,name='carts'),

    path('buy-now/',views.buy_now,name='buy_now'),

    path('orders/',views.orders,name='orders'),

    path('cancel-order/<int:order_id>/',views.cancel_order,name='cancel_order'),

    path('buy-now/', views.buy_now, name='buy_now'),
]
