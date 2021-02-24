from django.db import models

# Create your models here.
class Job(models.Model):
  title = models.CharField(max_length=50)
  description = models.CharField(max_length=2000)
  salary = models.PositiveIntegerField()
  location = models.CharField(max_length=50)
  company = models.CharField(max_length=50)
  email = models.CharField(max_length=50)
  logo = models.CharField(max_length=200)

  def __str__(self):
    return f"{self.title} - {self.company}"