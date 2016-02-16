from __future__ import unicode_literals

from django.db import models


class LiftType(models.Model):

    name = models.TextField(unique=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __unicode__(self):
        return u'Lift Type: %s' % self.name

    class Meta:
        db_table = 'lift_type'
        ordering = ('name',)
