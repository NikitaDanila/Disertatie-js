from django.urls import path
from . import views

urlpatterns = [
    path('getWaterConsumption/', views.getWaterConsumption,
         name="water_consumption"),
    path('getWaterConsumptionById/<str:pk>/', views.getWaterConsumptionById,
         name="getWaterConsumptionById"),
    path('getAllWaterConsumption/', views.getAllWaterConsumption,
         name="all_water_consumption"),
    path('updateWaterConsumption/<str:pk>/', views.updateWaterConsumption,
         name='updateWaterConsumption'),
    path('getWaterConsumptionByMonth/<str:pk>/<str:month>/', views.getWaterConsumptionByMonth,
         name='getWaterConsumptionByMonth'),
]
