from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_get_kpis():
    resp = client.get('/api/kpis')
    assert resp.status_code == 200
    data = resp.json()
    assert 'total_visitors' in data
    assert 'avg_time_per_zone' in data
    assert 'conversion_rate' in data
