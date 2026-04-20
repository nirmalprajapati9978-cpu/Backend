# Backend
# 🚀 Login Backend

Simple backend for login & signup system using Node.js and MongoDB.

---

## 📌 Features

- User Signup  
- User Login  
- Password hashing using bcrypt  
- MongoDB database  

---

## 🛠️ Tech Stack

- Node.js (no Express)  
- MongoDB  
- bcrypt  

---

## ▶️ Run

npm install  
node server.js  

Server runs on:  
http://localhost:8000  

---

## 📡 API

### POST /sign
{
  "username": "user",
  "password": "1234"
}

### POST /login
{
  "username": "user",
  "password": "1234"
}

---

## 🔐 Notes

- Passwords are hashed  
- Do not store plain passwords  
- Use HTTPS in production  

---

## 👨‍💻 Author

**Nirmal**

---

## 🌐 Deploy

Render