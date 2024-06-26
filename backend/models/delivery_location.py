from django.db import models
from.branch import Branch

class DeliveryLocation(models.Model):
    address = models.TextField()
    branch = models.ForeignKey(Branch, on_delete=models.CASCADE)
    contact_person = models.CharField(max_length=255)
    instructions = models.TextField()

    def __str__(self):
        return self.address