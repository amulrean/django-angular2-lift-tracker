from rest_framework import serializers

from server.lift.models import Lift
from server.lift_type.models import LiftType
from server.lift_type.serializers import LiftTypeSerializer
from server.lift_set.serializers import LiftSetSerializer


class LiftSerializer(serializers.ModelSerializer):

    # One-To-Many Nested Serializers
    lift_type = LiftTypeSerializer(read_only=True)

    # Many-to-One Nested Serializers
    lift_sets = LiftSetSerializer(many=True, read_only=True)

    class Meta:
        model = Lift

        fields = (
            'id',
            'lift_type',
            'lift_sets',
            'date',
            'created_at',
            'updated_at',
        )

    def create(self, validated_data):
        """
        Create must be overridden to handle Nested Serializers
        :param validated_data:
        :return:
        """

        lift_type_obj = None
        if 'lift_type' in self.initial_data and self.initial_data['lift_type']:
            if 'id' in self.initial_data['lift_type']:
                nested_id = self.initial_data['lift_type']['id']
                lift_type_obj = LiftType.objects.get(id=nested_id)

        if lift_type_obj:
            instance = Lift.objects.create(
                    lift_type=lift_type_obj,
                    **validated_data)
            return instance
        else:
            raise TypeError("Lift Type Requried")

    def update(self, instance, validated_data):
        """
        Update Must be overridden to handle Nested Serializers
        :param instance:
        :param validated_data:
        :return:
        """
        lift_type_obj = None
        if 'lift_type' in self.initial_data and self.initial_data['lift_type']:
            if 'id' in self.initial_data['lift_type']:
                nested_id = self.initial_data['lift_type']['id']
                lift_type_obj = LiftType.objects.get(id=nested_id)


        for attr, value in validated_data.items():
            setattr(instance, attr, value)

        if lift_type_obj:
            instance.lift_type = lift_type_obj
            instance.save()

            return instance
        else:
            raise TypeError("Lift Type Requried")