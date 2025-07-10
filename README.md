# 📋 College Club Recruitment App

A MERN stack web application designed to streamline the college club recruitment process.

## 🚀 Features

* ✍️ Students can submit their application via a simple form.
* 🔐 Admin Panel to view all applications.
* 🌐 MongoDB Atlas for storing all form data securely.
* 💡 Clean and minimal frontend UI.

---

## 🏗️ Project Structure

```bash
CLUB/
├── client/          # React frontend
├── server/          # Express backend
├── .env             # Environment variables
├── README.md        # Project documentation
└── package.json     # Project metadata
```

---

## 🛠️ Tech Stack

* Frontend: React.js
* Backend: Node.js + Express.js
* Database: MongoDB Atlas
* Other Tools: Nodemon, dotenv, CORS, Git

---

## 🔧 Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/Mayank-Malviyaa/Club-Recruitment-App.git
cd Club-Recruitment-App
```

### 2. Install Server Dependencies

```bash
cd server
npm install
```

### 3. Create a `.env` file in `server/`

```env
MONGO_URL=your_mongodb_connection_string
PORT=5000
JWT_SECRET=any_secret_key
```

> Replace `your_mongodb_connection_string` with your actual MongoDB Atlas URI.

### 4. Start the Backend Server

```bash
npm start
```

You should see:

```
✅ MongoDB Connected
🚀 Server running at http://localhost:5000
```

### 5. Run Frontend (Client)

```bash
cd ../client
npm install
npm start
```

You should see the form running at: `http://localhost:3000`

---

## 🔐 Admin Credentials (Default)

```txt
Email: admin@college.com
Password: admin123
```

---

## 🧪 API Testing

You can test API endpoints using tools like Thunder Client or Postman.

* POST `/api/club/apply` – Submit application
* GET `/api/club/all` – Get all applications

---

## 💡 Future Enhancements

* Multi-admin support
* Different dashboards for each club
* Export applications as CSV
* Enhanced UI using TailwindCSS or Material UI
* Email notifications

---

## 📦 Deployment (Coming Soon)

Guide to deploy the app using Vercel (Frontend) and Render or Railway (Backend).

---

## 🧑‍💻 Developed By

**Mayank Malviya**

---

### 📌 Note

This project is built for learning and demonstration purposes. Contributions and feedback are welcome!

---