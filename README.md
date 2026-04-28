<div align="center">

# 🚗 Advance Car Hub

### A Modern Full-Stack Automobile Management Platform

[![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![React](https://img.shields.io/badge/Frontend-React%20+%20TypeScript-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/Styling-Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![MySQL](https://img.shields.io/badge/Database-MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Python](https://img.shields.io/badge/Language-Python-3776AB?style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

> **UG Capstone Project** · B.Sc. Information Technology  
> A production-style full-stack application for streamlined car exploration, service booking, and administrative management.

[Features](#-core-functionalities) · [Architecture](#️-system-architecture) · [API Reference](#-api-reference) · [Setup](#-getting-started) · [Roadmap](#-roadmap)

---

</div>

## 📌 Table of Contents

- [About the Project](#-about-the-project)
- [Academic Context](#-academic-context)
- [Key Highlights](#-key-highlights)
- [Core Functionalities](#-core-functionalities)
- [System Architecture](#️-system-architecture)
- [Tech Stack](#-tech-stack)
- [API Reference](#-api-reference)
- [Security Practices](#-security-practices)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Roadmap](#-roadmap)
- [Capstone Outcomes](#-capstone-outcomes)

---

## 🔍 About the Project

**Advance Car Hub** is a comprehensive web application built to bridge the gap between car owners and automotive services. It enables users to explore mechanics, interact with service professionals, and manage their automotive needs — all through a clean, intuitive interface backed by a robust REST API.

The platform features a fully dynamic data layer (no hardcoded/static data), a secure authentication system, and a centralized admin dashboard with full CRUD control over users and mechanics.

---

## 🎓 Academic Context

> This project was developed as the **Bachelor of Science in Information Technology (B.Sc. IT)** capstone submission, with a focus on building a real-world, end-to-end full-stack application.

| Field | Detail |
|---|---|
| Degree | B.Sc. Information Technology |
| Project Type | UG Capstone / Final Year Project |
| Focus Areas | Full-Stack Dev · API Design · DB Modeling · UI/UX |

---

## 🧠 Key Highlights

| # | Feature | Description |
|---|---|---|
| 🔐 | **Secure Auth** | Login & registration with bcrypt password hashing |
| ⚙️ | **RESTful API** | Clean, modular endpoints built with FastAPI |
| 🧾 | **Admin Dashboard** | Full user & mechanic management with CRUD operations |
| 🔄 | **Dynamic Data** | All content fetched live from MySQL — zero static data |
| 📊 | **Relational DB** | Structured MySQL schema with normalized tables |
| 🎨 | **Responsive UI** | Modern, mobile-friendly React + TypeScript + Tailwind CSS interface |

---

## 🧩 Core Functionalities

### 👤 User System
- Account registration and secure login
- Persistent session-based authentication
- Access to mechanic listings and service details

### 🛠️ Mechanics Module
- Dynamically loaded mechanic profiles from the database
- Detailed information: experience, specialization, and ratings
- Service interaction and contact functionality

### 🛡️ Admin Panel
- View and manage all registered users
- View and manage all mechanics
- Full delete/CRUD operations via a centralized control dashboard

---

## 🏗️ System Architecture

```
┌─────────────────────────────────────────────────────────┐
│                        CLIENT                           │
│         React + TypeScript + Tailwind CSS (SPA)         │
│         Component-based · Responsive Design             │
└──────────────────────┬──────────────────────────────────┘
                       │  HTTP / JSON
┌──────────────────────▼──────────────────────────────────┐
│                       BACKEND                           │
│               FastAPI  ·  main.py                       │
│       RESTful API · Pydantic Validation · bcrypt        │
└──────────────────────┬──────────────────────────────────┘
                       │  SQL Queries
┌──────────────────────▼──────────────────────────────────┐
│                      DATABASE                           │
│             MySQL  ·  database.sql                      │
│           Users · Mechanics · Sessions                  │
└─────────────────────────────────────────────────────────┘
```

> **Design principle:** Clean separation of concerns — the frontend, backend, and database are fully decoupled and communicate exclusively through JSON-based API contracts.

---

## 💻 Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| **Frontend** | React + TypeScript | Component-based, type-safe UI |
| **Styling** | Tailwind CSS + PostCSS | Utility-first responsive styling |
| **Backend** | FastAPI (Python) | High-performance REST API |
| **Database** | MySQL | Relational data storage |
| **Auth** | bcrypt | Password hashing |
| **Validation** | Pydantic | Request/response schema validation |
| **Config** | python-dotenv | Environment variable management |
| **Linting** | ESLint | Code quality and consistency |

---

## 📡 API Reference

### 🔑 Authentication

| Endpoint | Method | Description | Auth Required |
|---|---|---|---|
| `/register` | `POST` | Register a new user account | ❌ |
| `/login` | `POST` | Authenticate and start a session | ❌ |

### 👥 Users

| Endpoint | Method | Description | Auth Required |
|---|---|---|---|
| `/users` | `GET` | Retrieve all registered users | ✅ Admin |
| `/users/{id}` | `DELETE` | Remove a user by ID | ✅ Admin |

### 🔧 Mechanics

| Endpoint | Method | Description | Auth Required |
|---|---|---|---|
| `/mechanics` | `GET` | Retrieve all mechanic profiles | ✅ |
| `/mechanics/{id}` | `GET` | Get a mechanic profile by ID | ✅ |
| `/mechanics/{id}` | `DELETE` | Remove a mechanic by ID | ✅ Admin |

<details>
<summary><strong>📋 Sample Request — Register</strong></summary>

```json
POST /register
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response `201 Created`:**
```json
{
  "message": "User registered successfully",
  "user_id": 42
}
```
</details>

<details>
<summary><strong>📋 Sample Request — Login</strong></summary>

```json
POST /login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response `200 OK`:**
```json
{
  "message": "Login successful",
  "user": {
    "id": 42,
    "username": "john_doe",
    "email": "john@example.com"
  }
}
```
</details>

---

## 🔐 Security Practices

- 🔒 **Password Hashing** — All passwords stored using `bcrypt` (never plaintext)
- 🌍 **Environment Variables** — Sensitive config (DB credentials, secrets) stored in `.env`
- 🚫 **Git Protection** — `.gitignore` present in both root and `/backend` to prevent credential leaks
- ✅ **Input Validation** — All inputs validated via FastAPI + Pydantic schemas
- 🛡️ **Admin-only Routes** — Destructive operations gated behind admin checks

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:
- [Python 3.10+](https://www.python.org/)
- [Node.js 18+](https://nodejs.org/)
- [MySQL 8+](https://www.mysql.com/)

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/advance-car-hub.git
cd advance-car-hub
```

### 2. Backend Setup

```bash
cd backend
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install fastapi uvicorn pymysql bcrypt python-dotenv pydantic
```

Create a `.env` file inside the `/backend` directory:

```env
DB_HOST=localhost
DB_PORT=3306
DB_NAME=advance_car_hub
DB_USER=root
DB_PASSWORD=your_password
SECRET_KEY=your_secret_key
```

Start the backend server:

```bash
uvicorn main:app --reload
```

> API runs at `http://localhost:8000`  
> Interactive Swagger docs at `http://localhost:8000/docs`

### 3. Database Setup

Import the provided SQL schema into MySQL:

```bash
mysql -u root -p < backend/database.sql
```

### 4. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

> App runs at `http://localhost:5173`

---

## 📁 Project Structure

```
advance-car-hub/
│
├── backend/                        # FastAPI Python backend
│   ├── __pycache__/                # Python bytecode cache (auto-generated)
│   ├── .gitignore                  # Backend-specific git ignore rules
│   ├── database.sql                # MySQL schema & seed data
│   └── main.py                     # App entry point — all routes & logic
│
├── frontend/                       # React + TypeScript frontend
│   ├── src/                        # Source files (components, pages, services)
│   ├── index.html                  # Root HTML template
│   ├── package.json                # Node dependencies & scripts
│   ├── package-lock.json           # Locked dependency tree
│   ├── tailwind.config.js          # Tailwind CSS configuration
│   ├── postcss.config.js           # PostCSS plugin config
│   ├── eslint.config.js            # ESLint rules & settings
│   ├── tsconfig.json               # Base TypeScript config
│   ├── tsconfig.app.json           # App-specific TS config
│   └── tsconfig.node.json          # Node environment TS config
│
├── .gitignore                      # Root-level git ignore rules
├── package-lock.json               # Root lock file
└── README.md                       # Project documentation
```

---

## 🛣️ Roadmap

| Status | Feature |
|---|---|
| ✅ | User authentication (register / login) |
| ✅ | Mechanic listing & profiles |
| ✅ | Admin dashboard with CRUD |
| ✅ | MySQL database integration |
| ✅ | Tailwind CSS responsive UI |
| 🔜 | JWT-based stateless authentication |
| 🔜 | Booking & appointment system |
| 🔜 | Booking history & tracking |
| 🔜 | Admin analytics dashboard |
| 🔜 | Role-based access control (RBAC) |
| 🔜 | Payment gateway integration |
| 🔜 | Real-time notifications |
| 🔜 | Cloud hosting setup (AWS / Vercel / Railway) |

---

## 🎯 Capstone Outcomes

This project demonstrates proficiency across the full software development lifecycle:

- **Full-Stack Development** — End-to-end ownership from database schema to UI components
- **API Design** — RESTful endpoint design, request validation, and structured responses
- **Database Modeling** — Normalized relational schema with real-world query patterns
- **Security Implementation** — Authentication, hashing, and environment-based configuration
- **UI/UX Principles** — Responsive, user-centered design using Tailwind CSS utility classes
- **Debugging & Problem Solving** — Cross-layer debugging (frontend ↔ API ↔ database)
- **Scalable Architecture** — Modular codebase structured for growth and maintainability

---

<div align="center">

**Developed as part of a B.Sc. IT capstone project**

*If you found this project useful, consider giving it a ⭐ on GitHub!*

</div>
