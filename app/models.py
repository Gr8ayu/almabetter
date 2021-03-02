from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator 
# Create your models here.

class Score(models.Model):
    name = models.CharField(max_length=120)
    rollno = models.PositiveIntegerField(unique=True)
    maths = models.FloatField(default=0, validators=[MinValueValidator(1), MaxValueValidator(100)])
    physics = models.FloatField(default=0, validators=[MinValueValidator(1), MaxValueValidator(100)])
    chemistry = models.FloatField(default=0, validators=[MinValueValidator(1), MaxValueValidator(100)])
    total = models.FloatField(default=0)
    percentage = models.FloatField(default=0)
    
    def __str__(self):
        return self.name