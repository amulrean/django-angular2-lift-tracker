import base64
import logging
import os
import shutil
import sys
from subprocess import call
from datetime import datetime
from pprint import pformat
from django.core.files import File

sys.path.insert(0, os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "server.settings")

import django

django.setup()
from django.contrib.auth.models import User
from django.conf import settings

from server.lift.models import Lift
from server.lift_type.models import LiftType
from server.lift_set.models import LiftSet


if __name__ == '__main__':

    if os.path.exists(os.path.join(settings.BASE_DIR, 'db.sqlite3')):
        os.remove(os.path.join(settings.BASE_DIR, 'db.sqlite3'))

    call(["python", "manage.py", "migrate"])

    admin_user = User.objects.create_superuser(username='admin', email='admin@django.com', password='admin')

    squat_type = LiftType.objects.create(name="Squat")
    bench_type = LiftType.objects.create(name="Bench Press")
    dead_type = LiftType.objects.create(name="Dead Lift")
    press_type = LiftType.objects.create(name="Press")

    lift_1 = Lift.objects.create(date=datetime(2016, 2, 10), lift_type=squat_type)
    set_1_1 = LiftSet.objects.create(lift=lift_1, reps=5, weight=95)
    set_1_2 = LiftSet.objects.create(lift=lift_1, reps=5, weight=95)
    set_1_3 = LiftSet.objects.create(lift=lift_1, reps=5, weight=95)
    lift_2 = Lift.objects.create(date=datetime(2016, 2, 11), lift_type=squat_type)
    set_2_1 = LiftSet.objects.create(lift=lift_2, reps=5, weight=105)
    set_2_2 = LiftSet.objects.create(lift=lift_2, reps=5, weight=105)
    set_2_3 = LiftSet.objects.create(lift=lift_2, reps=5, weight=105)
    lift_3 = Lift.objects.create(date=datetime(2016, 2, 12), lift_type=squat_type)
    set_3_1 = LiftSet.objects.create(lift=lift_3, reps=5, weight=115)
    set_3_2 = LiftSet.objects.create(lift=lift_3, reps=5, weight=115)
    set_3_3 = LiftSet.objects.create(lift=lift_3, reps=5, weight=115)
    lift_4 = Lift.objects.create(date=datetime(2016, 2, 13), lift_type=squat_type)
    set_4_1 = LiftSet.objects.create(lift=lift_4, reps=5, weight=125)
    set_4_2 = LiftSet.objects.create(lift=lift_4, reps=5, weight=125)
    set_4_3 = LiftSet.objects.create(lift=lift_4, reps=5, weight=125)



