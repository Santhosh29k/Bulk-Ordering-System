from django.db import models
from.corporate_user import CorporateUser
from.kitchen import Kitchen

class Order(models.Model):
    corporate_user = models.ForeignKey(CorporateUser, on_delete=models.CASCADE)
    kitchen = models.ForeignKey(Kitchen, on_delete=models.CASCADE)
    subscription = models.ForeignKey(Subscription, on_delete=models.CASCADE)
    order_date = models.DateField()
    total_quantity = models.IntegerField()
    status = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.corporate_user} - {self.kitchen}"