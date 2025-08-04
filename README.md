# 💼 Mini LinkedIn-like Community Platform

A full-stack MERN (MongoDB, Express, React, Node.js) application built as part of a full stack internship challenge. This app includes user authentication, profile management, post creation, and more.

---

## 🚀 Features

- 🔐 Register/Login (JWT Auth)
- 👤 User Profile with Name, Email, Bio
- 📝 Post Creation & Feed
- 🧵 Comment System
- 🔍 Search/Filter Users
- ⚙️ Admin Panel (Optional)
- 📡 RESTful API Backend
- 💬 Toast Notifications

---

## 🧱 Tech Stack

| Tech        | Usage           |
|-------------|-----------------|
| React.js    | Frontend        |
| TailwindCSS | Styling         |
| Node.js     | Backend         |
| Express.js  | API Routing     |
| MongoDB     | Database        |
| Mongoose    | ODM             |
| JWT         | Auth Tokens     |
| Axios       | API Requests    |

---
mini-linked-in/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ └── server.js
├── frontend/
│ ├── components/
│ ├── pages/
│ ├── App.jsx
│ └── main.jsx
└── README.md

yaml
Copy
Edit

---

## 🛠️ Getting Started

### 1️⃣ Prerequisites

- Node.js & npm
- MongoDB installed locally or Atlas URI
- Git

---

### 2️⃣ Installation

#### Clone the repo:
```bash
git clone https://github.com/your-username/mini-linked-in.git
cd mini-linked-in
```
If using submodules:

```bash
git submodule update --init --recursive
3️⃣ Setup Backend
```
```bash

cd backend
npm install
Create .env file in /backend:
```
```ini

MONGO_URI=mongodb://localhost:27017/mini_linked_in
JWT_SECRET=your_jwt_secret
PORT=8000
Start server:
```
```bash

npm run dev
4️⃣ Setup Frontend
```
```bash
cd frontend
npm install
Start frontend:
```
```bash

npm run dev
App will be running on: http://localhost:5173
```
🔗 API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login existing user
GET	/api/user/profile	Get user profile
POST	/api/posts	Create new post
GET	/api/posts/feed	Get all posts

🧪 Testing
Use tools like Postman or Thunder Client for backend API testing.

🧑‍💻 Author
Gurunatha Gouda
Full Stack Developer | Machine Learning Engineer

📜 License
This project is licensed under the MIT License.

yaml
```

---

Let me know if you'd like to add screenshots, deployment steps (e.g., for Vercel + Render), or a `docker-compose` versi
## 📁 Project Structure
```
