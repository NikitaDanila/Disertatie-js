from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(),
         name='token_obtain_pair'),

    path('register/', views.registerUser, name='register'),

    path('getCurrentUser/', views.getCurrentUser, name='getUser'),
    path('getAllUsers/', views.getAllUsers, name='getAllUsers'),
    path('getProfiles/', views.getProfiles, name='getProfiles'),
    path('getProfile/<str:pk>/', views.getProfile, name='getProfile'),
    path('updateProfile/', views.updateProfile, name='updateProfile'),
    path('deleteUser/<str:pk>', views.deleteUser, name='deleteUser'),
]
