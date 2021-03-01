from django.urls import path, include
from app import views
from django.views.decorators.csrf import csrf_exempt
urlpatterns = [

    path('leaderboard', views.leaderboard, name="leaderboard"),
    path('addscore', views.addscore.as_view(), name="addscore"),
    # path('', views.index, name="index"),
]