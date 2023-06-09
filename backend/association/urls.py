from django.urls import path
from . import views

urlpatterns = [
    path('getAssociation/<str:pk>/',
         views.getAssociation, name='getAssociation'),
    path('getAssociationById/<str:pk>/',
         views.getAssociationById, name='getAssociationById'),
    path('getAllAssociations/', views.getAllAssociation, name='getAllAssociation'),
    path('updateAssociation/<str:pk>',
         views.updateAssociation, name='updateAssociation'),
    path('deleteAssociation/<str:pk>',
         views.deleteAssociation, name='deleteAssociation'),
    path('registerAssociation/', views.registerAssociation, name='createAssociation')
]
