# QuickRommie - Flatmate Conflict Management System

## 🚀 Project Overview
QuickRommie is a **MERN Stack** project designed to help flatmates resolve everyday conflicts through complaint logging, voting, and gamification.

##  Project Structure
```
QuickRommie/
│── backend/                # Node.js & Express Server
│   ├── controllers/        # Handles business logic
│   ├── routes/             # API Endpoints
│   ├── models/             # Mongoose Schemas
│   ├── middleware/         # JWT Authentication
│   ├── config/             # Database connection
│   ├── .env                # Environment Variables (Not in GitHub)
│   ├── server.js           # Express App Entry Point
│── frontend/               # React Frontend
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Pages (Login, Dashboard, Complaints)
│   │   ├── context/        # State Management
│   │   ├── App.js          # Main React App Component
│── .gitignore              # Ignore unnecessary files
│── README.md               # Project Documentation
```

##  Setup Instructions

### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/rishikeshhh123/QuickRommie.git
cd QuickRommie
```

### **2️⃣ Setup Backend**
```bash
cd backend
npm install
```
#### **Configure Environment Variables**
Create a `.env` file in `backend/` and add:
```ini
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```
#### **Run Backend**
```bash
node server.js
```
✅ **Backend running at:** `http://localhost:5000`

### **3️⃣ Setup Frontend**
```bash
cd frontend
npm install
```
#### **Run Frontend**
```bash
npm run dev
```
✅ **Frontend running at:** `http://localhost:3005`

## 📡 API Endpoints

### **User Authentication**
- **POST** `/api/auth/register` - Register new user
- **POST** `/api/auth/login` - Login & receive JWT token

### **Complaint Handling**
- **POST** `/api/complaints` - File a new complaint (Authenticated users only)
- **GET** `/api/complaints` - List all active complaints
- **PUT** `/api/complaints/{id}/resolve` - Mark complaint as resolved

### **Voting System**
- **POST** `/api/complaints/{id}/vote` - Upvote/downvote a complaint
- **GET** `/api/complaints/trending` - Fetch most upvoted complaints

### **Leaderboard & Stats**
- **GET** `/api/leaderboard` - Show karma points ranking
- **GET** `/api/flat/stats` - Get complaint statistics

## 🎯 Features
- 🛠 **User Authentication** (JWT, MongoDB)
- 📝 **Complaint Logging & Resolution**
- 👍 **Voting System for Fairness**
- 🏆 **Gamification (Karma Points & Rewards)**
- 📊 **Leaderboard & Statistics**

## 🤝 Contributing
Pull requests are welcome! Please fork the repo and submit a PR.

## ⚖️ License
This project is licensed under the MIT License.

📩 **For any issues, contact:** `your_email@example.com`
