from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import mysql.connector
from passlib.hash import bcrypt
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv

# ================= LOAD ENV =================
load_dotenv()

# ================= APP =================
app = FastAPI()

# ================= CORS =================
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ================= DB CONNECTION =================
def get_db_connection():
    return mysql.connector.connect(
        host=os.getenv("DB_HOST"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD"),
        database=os.getenv("DB_NAME"),
        ssl_disabled=True
    )

db = get_db_connection()
cursor = db.cursor(dictionary=True)

# ================= MODELS =================
class UserRegister(BaseModel):
    name: str
    email: str
    password: str

class UserLogin(BaseModel):
    email: str
    password: str

# ================= HELPER =================
def ensure_connection():
    global db, cursor
    try:
        if not db.is_connected():
            db = get_db_connection()
            cursor = db.cursor(dictionary=True)
    except:
        db = get_db_connection()
        cursor = db.cursor(dictionary=True)

# ================= REGISTER =================
@app.post("/register")
def register_user(user: UserRegister):
    try:
        ensure_connection()

        hashed_password = bcrypt.hash(user.password)

        cursor.execute(
            "INSERT INTO users (name, email, password_hash, role) VALUES (%s, %s, %s, %s)",
            (user.name, user.email, hashed_password, "user")
        )
        db.commit()

        return {"message": "User registered successfully"}

    except mysql.connector.IntegrityError:
        raise HTTPException(status_code=400, detail="Email already exists")

    except Exception as e:
        print("REGISTER ERROR:", e)
        raise HTTPException(status_code=500, detail="Server error")

# ================= LOGIN =================
@app.post("/login")
def login_user(user: UserLogin):
    try:
        ensure_connection()

        cursor.execute(
            "SELECT id, name, email, password_hash, role FROM users WHERE email=%s",
            (user.email,)
        )
        result = cursor.fetchone()

        if not result:
            raise HTTPException(status_code=400, detail="User not found")

        if not bcrypt.verify(user.password, result["password_hash"]):
            raise HTTPException(status_code=400, detail="Invalid credentials")

        return {
            "id": result["id"],
            "name": result["name"],
            "email": result["email"],
            "role": result["role"]
        }

    except Exception as e:
        print("LOGIN ERROR:", e)
        raise HTTPException(status_code=500, detail="Server error")

# ================= GET USERS =================
@app.get("/users")
def get_users():
    try:
        ensure_connection()
        cursor.execute("SELECT id, name, email, role FROM users")
        return cursor.fetchall()
    except Exception as e:
        print("GET USERS ERROR:", e)
        raise HTTPException(status_code=500, detail="Server error")

# ================= GET MECHANICS =================
@app.get("/mechanics")
def get_mechanics():
    try:
        ensure_connection()
        cursor.execute("SELECT * FROM mechanics")
        return cursor.fetchall()
    except Exception as e:
        print("GET MECHANICS ERROR:", e)
        raise HTTPException(status_code=500, detail="Server error")

# ================= DELETE USER =================
@app.delete("/users/{user_id}")
def delete_user(user_id: int):
    try:
        ensure_connection()

        cursor.execute("DELETE FROM users WHERE id=%s", (user_id,))
        db.commit()

        return {"message": "User deleted successfully"}

    except Exception as e:
        print("DELETE USER ERROR:", e)
        raise HTTPException(status_code=500, detail="Server error")

# ================= DELETE MECHANIC =================
@app.delete("/mechanics/{id}")
def delete_mechanic(id: int):
    try:
        ensure_connection()

        cursor.execute("DELETE FROM mechanics WHERE id=%s", (id,))
        db.commit()

        return {"message": "Mechanic deleted successfully"}

    except Exception as e:
        print("DELETE MECHANIC ERROR:", e)
        raise HTTPException(status_code=500, detail="Server error")