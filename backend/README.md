## Setting up the backend

1. Set up virtual environment
    Make sure you are in the `backend` directory and run these commands:
    
    Mac:
    ```bash
    python3 -m virtualenv env
    source env/bin/activate
    pip install -r requirements.txt
    ```

    Windows:
    ```bash
    python -m venv env
    .\env\Scripts\activate
    pip install -r requirements.txt
    ```

2. Run migrations
    ```bash
    python manage.py migrate
    ```

3. Create a super user
    ```bash
    python manage.py createsuperuser
    ```
    **NB**: When you type your password, it might look like nothing is happening, but it is.

4. Start the server
    ```bash
    python manage.py runserver
    ```

The server should now be running at http://localhost:8000.
To see the admin panel go to http://localhost:8000/admin/.

### Run and test automatically
It is possible to automatically run and test the backend in VSCode (after completing the steps above):
- In VSCode, go to the tab Run and Debug. 
- Press the green "play" button at the top of the Run and Debug menu.
