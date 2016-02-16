from rest_framework import serializers
from server.lift_type.models import LiftType


class LiftTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = LiftType

        fields = (
            'id',
            'name',
            'created_at',
            'updated_at',
        )

