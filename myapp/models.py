from django.db import models


class Order(models.Model):
    username = models.CharField(max_length=100)
    address = models.TextField()
    email = models.EmailField()

    product_name = models.CharField(max_length=100)
    product_price = models.FloatField()
    product_image = models.ImageField(
    max_length=500,
        default="")


    status = models.CharField(
        max_length=20,
        default='order confirmed'
    )

    def __str__(self):
        return self.username