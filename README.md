# 💰 Finance Data Processing & Access Control Backend

## 📌 Overview

This project is a backend system for managing financial records with role-based access control and dashboard analytics.

It simulates a real-world fintech backend where different users interact with financial data securely.

---

## 🚀 Features

* 🔐 JWT Authentication
* 🛡️ Role-Based Access Control (RBAC)
* 👤 User Registration & Login
* 💰 Financial Records CRUD
* 🔍 Filtering & Pagination
* 📊 Dashboard Analytics:

  * Total Income & Expenses
  * Net Balance
  * Category-wise breakdown
  * Monthly trends
* ⚠️ Input Validation & Error Handling

---

## ⚙️ Tech Stack

* Node.js
* Express.js
* SQLite
* Sequelize ORM
* JWT
* bcrypt

---

## 🗃️ Data Models

### User

* id
* name
* email
* password (hashed)
* role
* status

### Record

* id
* amount
* type
* category
* date
* notes
* userId

---

## 🔐 Role-Based Access

| Role    | Access           |
| ------- | ---------------- |
| Viewer  | Read only        |
| Analyst | Read + analytics |
| Admin   | Full access      |

---

## 📊 API Endpoints

### Auth

* POST /auth/register
* POST /auth/login

### Records

* POST /records
* GET /records
* PATCH /records/:id
* DELETE /records/:id

### Dashboard

* GET /dashboard/summary
* GET /dashboard/categories
* GET /dashboard/trends

---

## ⚙️ Setup Instructions

1. Clone repository

2. Install dependencies
   npm install

3. Create .env file
   JWT_SECRET=your_secret

4. Run server
   node server.js

---

## 📮 Testing

Use Postman:

1. Register user
2. Login → get token
3. Add Authorization header
4. Test APIs

---

## 💰 Financial Accuracy Note

Amounts should ideally be stored as integers (cents) to avoid floating-point errors.

---

## 🏁 Conclusion

This project demonstrates backend skills including authentication, access control, API design, and financial data processing.

