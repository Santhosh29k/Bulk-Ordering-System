from django.db import models
from.order import Order
from.delivery_location import DeliveryLocation

class OrderDelivery(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE)
    location = models.ForeignKey(DeliveryLocation, on_delete=models.CASCADE)
    quantity = models.IntegerField()

    def __str__(self):
        return f"{self.order} - {self.location}"