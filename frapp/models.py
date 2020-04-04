from django.db import models
import uuid

# Create your models here.

class File(models.Model):
    file = models.FileField(blank=False, null=False)
    def __str__(self):
        return self.file.name

class Person(models.Model):    
    #id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=60)
    photoBase64 = models.TextField()
    isExisting = models.BooleanField(default=False)

class UnknownPerson(models.Model):    
    #id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    #name = models.CharField(max_length=60)
    unknownBase64 = models.TextField()
