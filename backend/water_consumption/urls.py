from django.urls import path
from . import views

urlpatterns = [
    path('getWaterConsumption/', views.getWaterConsumption,
         name="water_consumption"),
    path('getAllWaterConsumption/', views.getAllWaterConsumption,
         name="all_water_consumption"),
path('updateWaterConsumption/', views.updateWaterConsumption, name='updateWaterConsumption'),
]
