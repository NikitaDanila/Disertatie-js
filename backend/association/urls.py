from django.urls import path
from . import views

urlpatterns = [
    path('getAllAssociations', views.getAllAssociation, name='getAllAssociations')
]
