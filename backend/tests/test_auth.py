from fastapi.testclient import TestClient
from main import app

client = TestClient(app)


def test_register_and_login():
    # register new user
    resp = client.post('/api/register', json={'email': 'foo@example.com', 'password': 'bar'})
    assert resp.status_code == 200
    assert resp.json() == {'message': 'registered'}

    # login with correct credentials
    resp = client.post('/api/login', json={'email': 'foo@example.com', 'password': 'bar'})
    assert resp.status_code == 200
    assert 'token' in resp.json()

    # login with wrong password
    resp = client.post('/api/login', json={'email': 'foo@example.com', 'password': 'bad'})
    assert resp.status_code == 401
