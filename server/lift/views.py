from rest_framework import viewsets

from server.lift.models import Lift
from server.lift.serializers import LiftSerializer


class LiftViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.
    """
    queryset = Lift.objects.all()
    serializer_class = LiftSerializer
