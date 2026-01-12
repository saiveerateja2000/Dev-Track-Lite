# 🚀 DevTrack Lite - How to Run

This is a **minimal beginner-friendly setup**. Follow these steps to get both frontend and backend running.

---

## 📋 Prerequisites

Make sure you have installed:
- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **Git** - [Download](https://git-scm.com/)
- **MongoDB Atlas Account** - [Sign up free](https://www.mongodb.com/cloud/atlas)

---

## 🔧 Step 1: Setup MongoDB

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account and a project
3. Create a cluster (M0 free tier is enough)
4. Get your **connection string**: `mongodb+srv://username:password@cluster.mongodb.net/devtrack-lite`
5. Save it safely

---

## 🎯 Step 2: Setup Backend

### 2.1 Install Dependencies
```bash
cd backend
npm install
```

### 2.2 Configure Environment Variables
Edit the `.env` file in the backend folder:
```
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@YOUR_CLUSTER.mongodb.net/devtrack-lite
JWT_SECRET=your_super_secret_key_change_this_123
PORT=5000
```

Replace `YOUR_USERNAME`, `YOUR_PASSWORD`, `YOUR_CLUSTER` with your MongoDB Atlas credentials.

### 2.3 Run Backend
```bash
npm run dev
```

✅ You should see: **"Server running on port 5000"**

Test it: Open `http://localhost:5000` in browser. You should see: `{"message":"Backend is running!"}`

---

## 🎨 Step 3: Setup Frontend

### 3.1 Install Dependencies
```bash
cd frontend
npm install
```

### 3.2 Run Frontend
```bash
npm run dev
```

✅ You should see output like: **"Local: http://localhost:5173"**

Open that URL in your browser.

---

## ✅ You're Ready!

**Terminal 1 (Backend):**
```bash
cd /workspaces/Dev-Track-Lite/backend
npm install
npm run dev
```

**Terminal 2 (Frontend):**
```bash
cd /workspaces/Dev-Track-Lite/frontend
npm install
npm run dev
```

You should see:
- Backend running at `http://localhost:5000`
- Frontend running at `http://localhost:5173`

---

## 📝 What's Already Setup (Don't Build This)

✅ Folder structure  
✅ Package files with dependencies  
✅ Basic routing (Login, Signup, Dashboard)  
✅ API service with Axios  
✅ Tailwind CSS configured  
✅ Middleware template  
✅ Database models template  

---

## 👨‍💻 What YOU Need to Build (Day by Day)

- **Day 3**: Implement Signup/Login APIs with password hashing & JWT
- **Day 4**: Implement Task CRUD APIs
- **Day 5**: Build Login & Signup forms
- **Day 6**: Connect frontend to backend with real data
- **Day 7-8**: Task dashboard, update, delete functionality

---

## 🐛 Troubleshooting

### "Cannot find module"
```bash
npm install
```

### "MongoDB connection error"
- Check your `.env` file has correct credentials
- Make sure your MongoDB cluster is running

### "Port 5000 already in use"
Change PORT in `.env` to 5001 or higher

### "CORS error" 
The backend already has CORS enabled. Check frontend is calling correct URL.

---

## 📚 Useful Commands

**Backend**
- `npm run dev` - Run with auto-reload
- `npm start` - Run without auto-reload

**Frontend**
- `npm run dev` - Development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

---

Happy coding! 🎉
