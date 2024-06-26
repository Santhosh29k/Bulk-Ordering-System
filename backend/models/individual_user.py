from django.db import models
from.corporate_user import CorporateUser

class IndividualUser(models.Model):
    user = models.OneToOneField('auth.User', on_delete=models.CASCADE)
    corporate_user = models.ForeignKey(CorporateUser, on_delete=models.CASCADE)

    def __str__(self):
        return self.user.username