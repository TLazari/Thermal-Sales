from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

class Credentials(BaseModel):
    email: str
    password: str

users = {"demo@example.com": "demo"}

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/health")
async def health():
    return {"status": "ok"}


@app.post("/api/register")
async def register(creds: Credentials):
    if creds.email in users:
        raise HTTPException(status_code=400, detail="User already exists")
    users[creds.email] = creds.password
    return {"message": "registered"}


@app.post("/api/login")
async def login(creds: Credentials):
    if users.get(creds.email) != creds.password:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return {"token": "fake-jwt-token"}
