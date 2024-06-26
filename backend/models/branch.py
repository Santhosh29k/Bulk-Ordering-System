from django.db import models
from.company import Company

class Branch(models.Model):
    name = models.CharField(max_length=255)
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    manager = models.CharField(max_length=255)
    kitchen = models.BooleanField(default=False)

    def __str__(self):
        return self.name