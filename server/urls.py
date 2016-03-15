"""server URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.9/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from rest_framework import routers
from server.lift.views import LiftViewSet
from server.lift_type.views import LiftTypeViewSet
from server.lift_set.views import LiftSetViewSet

from server.views import IndexView

router = routers.DefaultRouter()

router.register(r'lifts', LiftViewSet)
router.register(r'lift-sets', LiftSetViewSet)
router.register(r'lift-types', LiftTypeViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    url(r'^api/v1/', include(router.urls)),
    url(r'^rest-auth/', include('rest_auth.urls')),
    url(r'^.*$', IndexView.as_view(), name='index'),
]