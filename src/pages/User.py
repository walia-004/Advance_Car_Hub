from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import mysql.connector
from passlib.hash import bcrypt
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS for React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React app URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Connect to MySQL
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="yourpassword",
    database="car_hub"
)
cursor = db.cursor()

# Pydantic Model for User Registration
class UserRegister(BaseModel):
    name: str
    email: str
    password: str

@app.post("/register")
def register_user(user: UserRegister):
    hashed_password = bcrypt.hash(user.password)
    
    try:
        cursor.execute(
            "INSERT INTO users (name, email, password_hash) VALUES (%s, %s, %s)",
            (user.name, user.email, hashed_password)
        )
        db.commit()
        return {"message": "User registered successfully"}
    except mysql.connector.IntegrityError:
        raise HTTPException(status_code=400, detail="Email already registered")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
