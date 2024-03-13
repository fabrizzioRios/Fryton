from django.contrib import admin
from django.urls import path, include
from api_1.views import api

urlpatterns = [
    path('run-code/', api.urls),
]