# 🧠 Task Manager API (Node.js + Express + MongoDB)

A production-ready backend API for managing tasks with JWT authentication, clean architecture (MVC + Service Layer), validation, rate limiting, and logging.

---

## 🚀 Features

* 🔐 JWT Authentication (Register/Login)
* 📋 Task CRUD APIs (Create, Read, Update, Delete)
* 🔎 Filter by status + Pagination
* ✅ Validation middleware (Joi)
* ⚡ Rate Limiting (auth + general)
* 📝 Logging (Morgan)
* ❌ Centralized Error Handling
* 🧱 Clean Architecture (Controller → Service → Model)
* ♻️ Reusable middleware & constants

---

## 🏗️ Architecture

```
Controller → Service → Model
        ↓
   Middleware (Auth / Validation / Error / RateLimit)
```

---

## 📂 Folder Structure

```
/config
/controllers
/services
/models
/routes
/middleware
/validators
/utils
app.js
server.js
```

---

## ⚙️ Tech Stack

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT (Authentication)
* Joi (Validation)
* Morgan (Logging)

---

## 🔧 Setup & Run

```bash
git clone <your-repo-url>
cd taskManagerNodeJs

npm install

# create .env file
PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_secret

npm run dev
```

---

## 🌐 API Base URL

```
http://localhost:5000/api
```

---

## 🔐 Auth APIs

### ➕ Register

**POST /api/auth/register**

```json
{
  "name": "Pratap",
  "email": "test@mail.com",
  "password": "123456"
}
```

---

### 🔑 Login

**POST /api/auth/login**

```json
{
  "email": "test@mail.com",
  "password": "123456"
}
```

**Response:**

```json
{
  "success": true,
  "token": "JWT_TOKEN"
}
```

---

## 📋 Task APIs (Protected)

👉 Add header:

```
Authorization: JWT_TOKEN
```

---

### ➕ Create Task

**POST /api/tasks**

```json
{
  "title": "Learn Node.js"
}
```

---

### 📥 Get Tasks (Filter + Pagination)

**GET /api/tasks?status=pending&page=1&limit=5**

---

### ✏️ Update Task

**PUT /api/tasks/:id**

```json
{
  "status": "completed"
}
```

---

### ❌ Delete Task

**DELETE /api/tasks/:id**

---

## ⚠️ Error Handling

```json
{
  "success": false,
  "message": "Error message"
}
```

---

## 🚀 Future Improvements

* 🔍 Search + Sort API
* 👥 Role-based Auth (Admin/User)
* ☁️ Deployment (Render / VPS)
* 🧪 Unit Testing (Jest)
* 📄 Swagger API Documentation

---

## 👨‍💻 Author

**Pratap Pawar**

---

# 🚫 Rate Limiting

* Prevents API abuse
* Applied especially on auth routes

Example:

* Max 10 requests per 15 minutes

---

# 🔐 Security Features

* Password hashing (bcrypt)
* JWT authentication
* Protected routes
* Rate limiting

---

## ⭐ Support


If you like this project, give it a ⭐ on GitHub!
