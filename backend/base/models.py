from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Note(models.Model):
    user=models.ForeignKey(User,on_delete=models.CASCADE,null=True)
    body=models.TextField()

class AllUserDetails(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)


class Application(models.Model):
    STATUS=(
        ('PENDING','PENDING'),
        ('DECLINED','DECLINED'),
        ('APPROVED','APPROVED'),
            ) 
    user=models.ForeignKey(User,on_delete=models.CASCADE,null=True)
    date=models.DateField(auto_now_add=True,null=True)
    fullname=models.CharField(max_length=50,null=True)
    phone=models.IntegerField(null=True)
    company_name=models.CharField(max_length=500,null=True)
    email=models.CharField(max_length=50,null=True)
    address=models.CharField(max_length=500,null=True)
    image=models.ImageField(upload_to="images",null=True)
    companyurl=models.CharField(max_length=50,null=True)
    TypeOfincubation=models.CharField(max_length=50,null=True)
    status=models.CharField(max_length=100, null=True,choices=STATUS,default="PENDING")
    allotted= models.BooleanField(default=False)

class Slot(models.Model):
    reserved_by=models.ForeignKey(Application,on_delete=models.CASCADE,null=True)
    is_available=models.BooleanField(default=True)