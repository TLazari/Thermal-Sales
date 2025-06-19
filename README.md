# Thermal-Sales

Thermal Sales é um sistema inteligente de análise de comportamento em lojas físicas, que utiliza mapas de calor (heatmaps) para identificar zonas quentes e frias de movimentação e vendas.

## Development Setup

### Prerequisites
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/)
- Optional: Python 3.11 and Node.js if running services without Docker

### Running with Docker

```bash
docker-compose up --build
```

This will start the FastAPI backend at `http://localhost:8000` and a Postgres database on port `5432`.

### Backend Only

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```


The frontend will start on http://localhost:3000.
