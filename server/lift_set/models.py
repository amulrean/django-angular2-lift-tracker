from __future__ import unicode_literals

from django.db import models
from server.lift.models import Lift


class LiftSet(models.Model):

    lift = models.ForeignKey(Lift, related_name='lift_sets')

    reps = models.IntegerField()
    weight = models.IntegerField()

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return u'Lift Set %s: %s' % (self.reps, self.weight)

    class Meta:
        db_table = 'lift_set'
        ordering = ('updated_at',)
