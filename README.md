# 🚀 Auth + Task Manager API

A production-ready backend API built with Node.js, Express, MongoDB, and JWT authentication.
This project demonstrates clean architecture (MVC), authentication, validation, error handling, and security best practices.

---

# 📌 Features

* 🔐 User Authentication (JWT)
* 👤 User Registration & Login
* 📋 Task Management (CRUD)
* 🔒 Protected Routes
* ⚠️ Centralized Error Handling
* ✅ Request Validation (Joi)
* 📝 Logging (Morgan)
* 🚫 Rate Limiting (API Protection)

---

# 🛠️ Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** MongoDB
* **Auth:** JWT (jsonwebtoken), bcrypt
* **Validation:** Joi
* **Logging:** Morgan
* **Security:** express-rate-limit
* **Tools:** VS Code, Postman, MongoDB Compass

---

# 📂 Project Structure

```
/project
  /config
  /controllers
  /models
  /routes
  /middleware
  /validators
  app.js
  server.js
  .env
```

---

# ⚙️ Getting Started

## 1. Clone the repository

```bash
git clone <your-repo-url>
cd project
```

---

## 2. Install dependencies

```bash
npm install
```

---

## 3. Setup environment variables

Create a `.env` file:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=your_secret_key
```

---

## 4. Start MongoDB

### Local:

```bash
sudo systemctl start mongod
```

### OR use MongoDB Atlas (cloud)

---

## 5. Run the server

```bash
npm run dev
```

Server will run on:

```
http://localhost:5000
```

---

# 🔐 Authentication APIs

## Register

```
POST /api/auth/register
```

```json
{
  "name": "John Doe",
  "email": "john@test.com",
  "password": "123456"
}
```

---

## Login

```
POST /api/auth/login
```

```json
{
  "email": "john@test.com",
  "password": "123456"
}
```

Response:

```json
{
  "token": "JWT_TOKEN"
}
```

---

# 📋 Task APIs

## 🔒 Headers (Required)

```
Authorization: JWT_TOKEN
```

---

## Create Task

```
POST /api/tasks
```

```json
{
  "title": "Learn Node.js"
}
```

---

## Get All Tasks

```
GET /api/tasks
```

---

## Update Task

```
PUT /api/tasks/:id
```

```json
{
  "status": "completed"
}
```

---

## Delete Task

```
DELETE /api/tasks/:id
```

---

# 🧪 Testing

Use **Postman**:

### Flow:

1. Register user
2. Login → get token
3. Add token in headers
4. Test task APIs

---

# ⚠️ Error Handling

Centralized error handling middleware ensures:

* Consistent API responses
* No server crashes

Example:

```json
{
  "success": false,
  "message": "Error message"
}
```

---

# ✅ Validation

* Implemented using Joi
* Ensures correct request structure
* Prevents invalid data

---

# 📝 Logging

* Morgan logs all HTTP requests

Example:

```
POST /api/auth/login 200 45ms
```

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

# 🚀 Future Improvements

* Role-based access control (Admin/User)
* Pagination & filtering
* Refresh tokens
* Deployment (Render / VPS)

---

# ⭐ Support

If you like this project, give it a ⭐ on GitHub!
