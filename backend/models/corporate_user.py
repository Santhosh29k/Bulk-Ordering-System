from django.db import models
from.branch import Branch

class CorporateUser(models.Model):
    user = models.OneToOneField('auth.User', on_delete=models.CASCADE)
    branch = models.ForeignKey(Branch, on_delete=models.CASCADE)
    mentor = models.ForeignKey(Mentor, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username