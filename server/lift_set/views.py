from rest_framework import viewsets

from server.lift_set.models import LiftSet
from server.lift_set.serializers import LiftSetSerializer


class LiftSetViewSet(viewsets.ModelViewSet):
    """
    This viewset automatically provides `list`, `create`, `retrieve`,
    `update` and `destroy` actions.
    """
    queryset = LiftSet.objects.all()
    serializer_class = LiftSetSerializer
