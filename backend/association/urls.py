from django.urls import path
from . import views

urlpatterns = [
    path('getAssociation/',
         views.getAssociation, name='getAssociation')
]
