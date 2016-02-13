Creation Steps:

Installed Windows versions:
Node
Python (withvirtualenv)

Windows Install Django:
https://docs.djangoproject.com/en/1.9/howto/windows/

Django Rest Framework Install:
http://www.django-rest-framework.org/tutorial/quickstart/

# Create the project directory
mkdir django-lift-tracker
cd django-lift-tracker

# Create a virtualenv to isolate our package dependencies locally
mkvirtualenv lift-tracker


# Install Django and Django REST framework into the virtualenv
pip install django
pip install djangorestframework

Created requirements.txt

# Set up a new project with a single application
django-admin.py startproject server .  # Note the trailing '.' character
cd server
django-admin.py startapp users
cd ..

python manage.py migrate

python manage.py createsuperuser

# Created Serializers and Views in tutorial
# Added Settings.py

python ./manage.py runserver


#Add in Angular 2 Client and Build
https://github.com/mbalex99/newfamily-example

# Configure Static root as SystemJs BaseUrl

# Configure gulp watch