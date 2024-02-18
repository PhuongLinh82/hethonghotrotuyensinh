from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class BaseModel(models.Model):
    created_date = models.DateField(auto_now_add=True)
    updated_date = models.DateField(auto_now=True)
    active = models.BooleanField(default=True)

    class Meta:
        abstract = True


class User(AbstractUser):
    avatar = models.ImageField(upload_to='avatar/%Y/%m')
    isCandidate = models.BooleanField(default=False)
    isAdviser = models.BooleanField(default=False)


class Faculty(BaseModel):   #Khoa
    class Meta:
        ordering = ["-id"]

    name = models.CharField(max_length=50, null=False)
    website = models.CharField(max_length=30, blank=True)
    video = models.FileField(null=True, blank=True)
    introduction = models.TextField(null=True, blank=True)
    program = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.name


class Major(BaseModel):  #Nganh
    class Meta:
        ordering = ["id"]

    code = models.CharField(max_length=20, unique=True, null=False)
    name = models.CharField(max_length=70, null=False)
    faculty = models.ForeignKey(Faculty, on_delete=models.SET_NULL, null=True)   #Khoa ngoai voi Faculty
    years = models.ManyToManyField("Year", through="Mark", blank=True)

    def __str__(self):
        return self.name


class Year(BaseModel):  #Nam
    class Meta:
        ordering = ["id"]
    year = models.IntegerField()
    majors = models.ManyToManyField("Major", through="Mark", blank=True)

    def __str__(self):
        return str(self.year)


class Mark(BaseModel):  #Diem
    class Meta:
        ordering = ["id"]
    mark = models.FloatField()
    major = models.ForeignKey(Major, on_delete=models.CASCADE, default=None, related_name="majorfk", blank=True)
    year = models.ForeignKey(Year, on_delete=models.CASCADE, default=None, related_name="yearfk", blank=True)

    def __str__(self):
        return str(self.mark)


class InformationSection(BaseModel): #Phan thong tin
    class Meta:
        ordering = ["id"]
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class Information(BaseModel):  #Thong tin
    class Meta:
        ordering = ["id"]
    infosection = models.ForeignKey(InformationSection, on_delete=models.SET_NULL, null=True) #Khoa ngoai voi InformationSection
    description = models.TextField(null=True)
    image = models.ImageField(upload_to="information/%Y/%m", default=None)


class BannerImage(BaseModel):  #Anh banner gioi thieu
    image = models.ImageField(upload_to="bannerimages/%Y%m", null=True)


class Comments(BaseModel):
    class Meta:
        ordering = ["id"]
    content = models.TextField(null=True)


class Questions(BaseModel):
    class Meta:
        ordering = ["id"]
    content = models.TextField(null=True)



    
