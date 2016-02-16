from django.db import models
from server.lift_type.models import LiftType


class Lift(models.Model):

    lift_type = models.ForeignKey(LiftType, related_name='lifts')

    date = models.DateTimeField()

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return u'Lift %s: %s' % (self.pk, self.lift_type.name)

    class Meta:
        db_table = 'lift'
        ordering = ('date',)
