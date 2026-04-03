# 🚗 Advance Car Hub

A modern full-stack automobile platform developed as a **Undergraduate (UG) Capstone Project**, designed to streamline car exploration, service booking, and administrative management using a scalable architecture.

---

## 🎓 Academic Context

This project was developed as part of my **Bachelor of Science in Information Technology (B.Sc. IT)** capstone, focusing on building a real-world, production-style full-stack application integrating frontend, backend, and database systems.

---

## 🚀 Overview

**Advance Car Hub** is a comprehensive web application that enables users to explore automotive services, interact with professional mechanics, and allows administrators to manage users and services efficiently through a centralized dashboard.

---

## 🧠 Key Highlights

* 🔐 Secure Authentication System (Login/Register with hashed passwords)
* ⚙️ RESTful API Architecture using FastAPI
* 🧾 Admin Dashboard with full control over users & mechanics
* 🔄 Dynamic data fetching from backend (no static data usage)
* 📊 MySQL database integration with structured schema
* 🎨 Responsive UI with modern design principles

---

## 🧩 Core Functionalities

### 👤 User System

* Account registration & login
* Persistent authentication
* Access to mechanics and services

### 🛠️ Mechanics Module

* Dynamic listing from database
* Detailed profiles (experience, specialization, ratings)
* Contact and service interaction

### 🛡️ Admin Panel

* View all registered users
* View all mechanics
* Perform delete operations (CRUD functionality)
* Centralized system control

---

## 🏗️ Architecture

* **Frontend:** React + TypeScript (Component-based UI)
* **Backend:** FastAPI (RESTful API services)
* **Database:** MySQL (Relational schema design)
* **Communication:** JSON-based API interaction

---

## 🔗 API Design

| Module    | Endpoint          | Method |
| --------- | ----------------- | ------ |
| Auth      | `/register`       | POST   |
| Auth      | `/login`          | POST   |
| Users     | `/users`          | GET    |
| Users     | `/users/{id}`     | DELETE |
| Mechanics | `/mechanics`      | GET    |
| Mechanics | `/mechanics/{id}` | DELETE |

---

## 🔐 Security Practices

* Password hashing using **bcrypt**
* Sensitive data stored in **environment variables (.env)**
* `.gitignore` used to protect credentials
* Input validation using FastAPI & Pydantic

---

## 📈 Scalability & Design Considerations

* Modular backend for easy feature expansion
* Clear separation of frontend, backend, and database layers
* Extendable for:

  * JWT authentication
  * Payment integration
  * Booking system
  * Role-based access control

---

## 🧪 Development Focus

This capstone project demonstrates:

* Full-stack development expertise
* API design and integration
* Database modeling and querying
* Debugging and problem-solving
* UI/UX design principles

---

## 🚀 Future Enhancements

* JWT-based authentication
* Booking history & tracking system
* Admin analytics dashboard
* Cloud deployment (AWS / Vercel)
* Real-time notifications


---

## ⭐ Project Value | 

This capstone project reflects strong understanding of:

* End-to-end application development
* Backend integration with frontend
* Database-driven system design
* Admin-level control implementation

---

> ⭐ If you found this project useful, consider giving it a star!
