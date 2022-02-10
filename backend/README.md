## Setting up the backend

1. Set up virtual environment
    Make sure you are in the `backend` directory and run these commands:
    ```bash
    python3 -m virtualenv env
    source env/bin/activate
    pip install -r requirements.txt
    ```

2. Run migrations
    ```bash
    python manage.py migrate
    ```

3. Create a super user
    ```bash
    python manage.py createsuperuser --email admin@example.com --username admin
    ```

4. Start the server
    ```bash
    python manage.py runserver
    ```

The server should now be running at http://localhost:8000.
To see the admin panel go to http://localhost:8000/admin/.