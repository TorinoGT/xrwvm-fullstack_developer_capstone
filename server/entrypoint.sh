#!/bin/sh

# Make migrations and migrate the database.
echo "Making migrations and migrating the database. "
python manage.py makemigrations --noinput
python manage.py migrate --noinput
#python3 manage.py migrate --run-syncdb --noinput
python manage.py collectstatic --noinput
exec "$@"