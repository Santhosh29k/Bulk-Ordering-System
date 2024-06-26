from django.db import models
from.branch import Branch
from.subscription_plan import SubscriptionPlan

class Subscription(models.Model):
    branch = models.ForeignKey(Branch, on_delete=models.CASCADE)
    plan = models.ForeignKey(SubscriptionPlan, on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return f"{self.branch} - {self.plan}"