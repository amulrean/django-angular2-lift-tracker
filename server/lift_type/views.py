from rest_framework import viewsets

from server.lift_type.models import LiftType
from server.lift_type.serializers import LiftTypeSerializer


class LiftTypeViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.
    """
    queryset = LiftType.objects.all()
    serializer_class = LiftTypeSerializer
