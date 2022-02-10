from django.test import TestCase
from django.urls import reverse
from rest_framework.test import APITestCase
from users.views import UserViewSet
import json


class CreateUserTest(APITestCase):
    uri = reverse("user-list")

    def test_can_create_valid_user(self):
        data = {
            "username": "test",
            "password": "#et-vanskelig-passord-123",
            "email": "test@example.com",
        }
        response = self.client.post(self.uri, data)
        assert response.status_code == 201, f"Expected 201 but got {response.status_code}. Here is the data: {json.dumps(response.data, indent=4)}"

    def test_cannot_create_invalid_user(self):
        data = {
            "username": "test2",
            "password": "#et-vanskelig-passord-123",
        }
        response = self.client.post(self.uri, data)
        assert response.status_code == 400, f"Expected 400 but got {response.status_code}. Here is the data: {json.dumps(response.data, indent=4)}"

    def test_cannot_use_same_email(self):
        data = {
            "username": "first-username",
            "password": "#et-vanskelig-passord-123",
            "email": "non-unique-email@example.com",
        }
        response = self.client.post(self.uri, data)
        assert response.status_code == 201, f"Expected 201 but got {response.status_code}. Here is the data: {json.dumps(response.data, indent=4)}"

        data["username"] = "second-username"
        response = self.client.post(self.uri, data)
        assert response.status_code == 400, f"Expected 400 but got {response.status_code}. Here is the data: {json.dumps(response.data, indent=4)}"

    def test_cannot_use_same_username(self):
        data = {
            "username": "another-username",
            "password": "#et-vanskelig-passord-123",
            "email": "example@example.com",
        }
        response = self.client.post(self.uri, data)
        assert response.status_code == 201, f"Expected 201 but got {response.status_code}. Here is the data: {json.dumps(response.data, indent=4)}"

        response = self.client.post(self.uri, data)
        assert response.status_code == 400, f"Expected 400 but got {response.status_code}. Here is the data: {json.dumps(response.data, indent=4)}"
