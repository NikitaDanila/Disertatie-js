from django.db import models

# Create your models here.


class Association(models.Model):
    id = models.AutoField(primary_key=True, editable=False)
    name = models.CharField(max_length=200, null=False, blank=False)
    email = models.EmailField(max_length=200, null=False, blank=False)
    phone_number = models.CharField(max_length=10, null=False, blank=False)
    schedule_of_receipts = models.CharField(
        max_length=200, null=False, blank=True, default='00/00/0000 - 00:00')
    address_of_collection = models.CharField(
        max_length=500, null=False, blank=False)
    bank_iban = models.CharField(max_length=20, null=False, blank=False)
    fiscal_code = models.CharField(max_length=10, null=False, blank=False)
    address = models.CharField(max_length=500, null=False, blank=False)
    president = models.CharField(max_length=200, null=False, blank=False)
    administrator = models.CharField(max_length=200, null=False, blank=False)
    censor = models.CharField(max_length=200, null=False, blank=False)

    def __str__(self):
        return f'{self.name}'
