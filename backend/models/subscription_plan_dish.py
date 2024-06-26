from django.db import models
from.subscription_plan import SubscriptionPlan
from.dish import Dish

class SubscriptionPlanDish(models.Model):
    subscription_plan = models.ForeignKey(SubscriptionPlan, on_delete=models.CASCADE)
    dish = models.ForeignKey(Dish, on_delete=models.CASCADE)
    quantity = models.IntegerField()

    def __str__(self):
        return f"{self.subscription_plan} - {self.dish}"