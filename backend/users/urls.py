from django.urls import path
from . import views

urlpatterns = [
    path('login/', views.MyTokenObtainPairView.as_view(),
         name='token_obtain_pair'),

    path('register/', views.registerUser, name='register'),

    path('getAllUsers/', views.getAllUsers, name='getAllUsers'),
    path('getCurrentUser/', views.getCurrentUser, name='getUser'),
    path('updateUser/<str:pk>/', views.updateUser, name='updateUser'),
    path('getUserById/<str:pk>/', views.getUserById, name='getUserById'),
    path('deleteUser/<str:pk>/', views.deleteUser, name='deleteUser'),

    path('getProfiles/', views.getProfiles, name='getProfiles'),
    path('getProfile/<str:pk>/', views.getProfile, name='getProfile'),
    path('updateProfile/', views.updateProfile, name='updateProfile'),

    path('adminRegisterUser/', views.adminRegisterUser, name='adminRegisterUser'),
]
