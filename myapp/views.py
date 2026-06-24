from django.shortcuts import render, redirect, get_object_or_404
from .models import Order
from .forms import OrderForm


def index(request):
    return render(request, 'index.html')


def books(request):
    return render(request, 'books.html')


def slippers(request):
    return render(request, 'slippers.html')


def clothing(request):
    return render(request, 'clothings.html')


def carts(request):
    return render(request, 'carts.html')


def buy_now(request):

    product_name = request.GET.get(
        'name'
    )

    product_image = request.GET.get(
        'image'
    )

    product_price = request.GET.get(
        'price'
    )

    if request.method == 'POST':

        form = OrderForm(
            request.POST
        )

        if form.is_valid():

            order = form.save(
                commit=False
            )

            order.product_name = (
                product_name
            )

            order.product_image = (
                product_image
            )

            order.product_price = (
                product_price
            )



            order.save()

            return redirect(
                'orders'
            )

    else:

        form = OrderForm()

    return render(
        request,
        'buy_now.html',
        {
            'form': form,
            'product_name': product_name,
            'product_image': product_image,
            'product_price': product_price
        }
    )


def orders(request):

    all_orders = Order.objects.all()

    return render(
        request,
        'orders.html',
        {
            'orders': all_orders
        }
    )


def cancel_order(
    request,
    order_id
):

    order = get_object_or_404(
        Order,
        id=order_id
    )

    order.delete()

    return redirect(
        'orders'
    )



from django.shortcuts import render, redirect
from .forms import OrderForm


def buy_now(request):

    product_name = request.GET.get(
        "name"
    )

    product_image = request.GET.get(
        "image"
    )

    product_price = request.GET.get(
        "price"
    )

    if request.method == "POST":

        form = OrderForm(
            request.POST
        )

        if form.is_valid():

            order = form.save(
                commit=False
            )

            order.product_name = (
                product_name
            )

            order.product_price = (
                product_price
            )

            order.product_image = (
                product_image
            )

            order = Order(
                username=form.cleaned_data['username'],
                address=form.cleaned_data['address'],
                email=form.cleaned_data['email'],
                product_name=product_name,
                product_price=product_price,
                product_image=product_image,
            )

            order.save()

            return redirect(
                "orders"
            )

    else:

        form = OrderForm()

    return render(
        request,
        "buy_now.html",
        {
            "form": form,
            "product_name":
            product_name,

            "product_image":
            product_image,

            "product_price":
            product_price
        }
    )




