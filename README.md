# DevTrack Lite – Beginner MERN Project Guide

## 1. Project Overview

**DevTrack Lite** is a simple full-stack task tracking web application designed for beginner-level MERN developers. The goal of this project is to build confidence by completing a real-world application from scratch and deploying it live.

This guide is written as a **step-by-step mentor-style document**. If followed day by day, the project will be completed successfully.

---

## 2. What You Are Building

A personal task tracker where users can:

* Sign up and log in
* Create tasks
* Update task status (Todo / In Progress / Done)
* Delete tasks
* View only their own tasks

This is NOT a complex app. Simplicity and completion are the priority.

---

## 3. Tech Stack

### Frontend

* React
* React Router DOM
* Axios
* Tailwind CSS

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication

### Tools

* VS Code
* Git & GitHub
* Postman
* MongoDB Atlas
* Vercel (Frontend Deployment)
* Render (Backend Deployment)

---

## 4. Project Architecture (High Level)

Frontend (React)
→ Axios API calls
→ Backend (Express APIs)
→ MongoDB (Data Storage)

Authentication is handled using JWT tokens stored in localStorage.

---

## 5. Folder Structure (Recommended)

### Backend

```
backend/
 ├── models/
 │   ├── User.js
 │   └── Task.js
 ├── routes/
 │   ├── auth.js
 │   └── tasks.js
 ├── middleware/
 │   └── authMiddleware.js
 ├── config/
 │   └── db.js
 ├── server.js
 └── .env
```

### Frontend

```
frontend/
 ├── src/
 │   ├── pages/
 │   │   ├── Login.jsx
 │   │   ├── Signup.jsx
 │   │   └── Dashboard.jsx
 │   ├── components/
 │   │   └── TaskCard.jsx
 │   ├── services/
 │   │   └── api.js
 │   ├── App.jsx
 │   └── main.jsx
```

---

## 6. Day-by-Day Execution Plan

### Day 1 – Setup & Understanding

**Goal:** Understand what you are building.

* Create a GitHub repository
* Initialize backend and frontend folders
* Draw basic app flow on paper

Confidence Tip: You are not coding today. You are planning like a professional.

---

### Day 2 – Backend Setup

**Goal:** Get the server running.

* Initialize Node project
* Install express, mongoose, cors, dotenv
* Create basic Express server
* Connect MongoDB Atlas

Confidence Tip: If server runs and DB connects, you are doing great.

---

### Day 3 – Authentication APIs

**Goal:** User login system.

* Create User schema
* Implement Signup API
* Implement Login API
* Hash passwords
* Generate JWT
* Test with Postman

Confidence Tip: Authentication is HARD for beginners. Don’t rush.

---

### Day 4 – Task APIs

**Goal:** CRUD functionality.

* Create Task schema
* Create task API
* Get user-specific tasks
* Update task status
* Delete task
* Secure routes with JWT middleware

Confidence Tip: CRUD = backbone of real apps.

---

### Day 5 – Frontend Setup

**Goal:** React app ready.

* Create React app
* Setup routing
* Create empty pages
* Configure Tailwind CSS

Confidence Tip: UI can be ugly. Functionality matters.

---

### Day 6 – Auth UI Integration

**Goal:** Connect frontend to backend.

* Build login & signup forms
* Connect APIs using Axios
* Save JWT token in localStorage
* Redirect user after login

Confidence Tip: First API success = confidence boost.

---

### Day 7 – Task Dashboard

**Goal:** Show tasks on UI.

* Create dashboard layout
* Fetch tasks from backend
* Display task list
* Add create task form

Confidence Tip: Seeing data on UI is a BIG milestone.

---

### Day 8 – Update & Delete Tasks

**Goal:** Complete functionality.

* Add edit status feature
* Add delete button
* Handle loading & errors

Confidence Tip: Your app is now REAL.

---

### Day 9 – Deployment

**Goal:** Make it public.

* Deploy backend on Render
* Deploy frontend on Vercel
* Update API URLs
* Test production app

Confidence Tip: Live app = resume-ready.

---

### Day 10 – Polish & Resume

**Goal:** Make it professional.

* Write README.md
* Add screenshots
* Clean code & commits
* Add project to resume

Confidence Tip: Completion matters more than perfection.

---

## 7. Development Process (VERY IMPORTANT)

Follow this rule always:

1. Build backend first
2. Test APIs using Postman
3. Connect frontend later
4. Commit code daily
5. Don’t compare with others

---

## 8. Common Beginner Mistakes to Avoid

* Adding too many features
* Copy-pasting without understanding
* Skipping Postman testing
* Trying to make UI perfect

---

## 9. Final Outcome

By completing this project, you will:

* Understand MERN architecture
* Gain backend confidence
* Learn deployment
* Have a real resume project

---

## 10. Resume Description

**DevTrack Lite – Personal Task Tracker**

* Built a full-stack task management application using React, Node.js, Express, and MongoDB
* Implemented JWT-based authentication and secure APIs
* Designed responsive UI with Tailwind CSS
* Deployed frontend and backend using cloud platforms

---

## 11. Final Message to the Developer

Finish this project.
Even if it’s not perfect.
Completion builds confidence.

You are already ahead by starting.
