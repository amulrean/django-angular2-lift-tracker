from rest_framework import serializers

from server.lift.models import Lift
from server.lift_set.models import LiftSet


class LiftSetSerializer(serializers.ModelSerializer):

    class Meta:
        model = LiftSet

        fields = (
            'id',
            'reps',
            'weight',
            'created_at',
            'updated_at',
        )

    def create(self, validated_data):
        """
        Create must be overridden to handle Nested Serializers
        :param validated_data:
        :return:
        """
        lift_obj = None
        if 'lift' in self.initial_data and self.initial_data['lift']:
            if 'id' in self.initial_data['lift']:
                nested_id = self.initial_data['lift']['id']
                lift_obj = Lift.objects.get(id=nested_id)

        if lift_obj:

            instance = LiftSet.objects.create(
                    lift=lift_obj,
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
        lift_obj = None
        if 'lift' in self.initial_data and self.initial_data['lift']:
            if 'id' in self.initial_data['lift']:
                nested_id = self.initial_data['lift']['id']
                lift_obj = Lift.objects.get(id=nested_id)


        for attr, value in validated_data.items():
            setattr(instance, attr, value)

        if lift_obj:
            instance.lift = lift_obj
            instance.save()

            return instance
        else:
            raise TypeError("Lift Type Requried")