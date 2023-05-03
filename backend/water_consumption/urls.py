from django.urls import path
from . import views

urlpatterns = [
    path('getWaterConsumption/', views.getWaterConsumption,
         name="water_consumption"),
]
