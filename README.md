# HireFlow

A full-stack MERN Job Portal that connects students with recruiters through a modern recruitment platform.

The application allows recruiters to create companies, post jobs, and manage applicants, while students can browse opportunities, upload resumes, and apply for jobs.

---

## 🌐 Live Demo

- **Frontend:** https://hireflow-vdod.onrender.com
- **Backend API:** https://hireflow-backend-orop.onrender.com

---

# About

HireFlow is a full-stack recruitment platform built using the MERN Stack.

The platform supports two user roles:

- Student
- Recruiter

Recruiters can create companies, publish job openings, and manage applications.

Students can browse jobs, search opportunities, upload resumes, and apply for available positions.

This project demonstrates real-world authentication, authorization, protected routes, file uploads, Redux state management, REST APIs, and cloud deployment.

---

# Features

## Authentication

- Student Registration
- Recruiter Registration
- Secure Login
- JWT Authentication
- Cookie-Based Authentication
- Protected Routes

## Student Features

- Browse Jobs
- Search Jobs
- Apply for Jobs
- Upload Resume
- Update Profile
- View Applied Jobs

## Recruiter Features

- Create Company
- Update Company Information
- Post Jobs
- View Posted Jobs
- Manage Applicants

## Additional Features

- Cloudinary File Upload
- Redux Toolkit State Management
- Responsive UI
- REST API Architecture
- MongoDB Atlas Integration
- Render Deployment

---

# Tech Stack

| Category | Technologies |
|-----------|--------------|
| Frontend | React, Vite, Redux Toolkit, Tailwind CSS, shadcn/ui |
| Backend | Node.js, Express.js |
| Database | MongoDB Atlas, Mongoose |
| Authentication | JWT, Cookies |
| File Upload | Multer, Cloudinary |
| Deployment | Render |

---

# Architecture

```
Client (React)

↓

Axios API Calls

↓

Express Server

↓

Controllers

↓

MongoDB Atlas

Cloudinary
↑
Multer
```

---

# Project Structure

```
HireFlow
│
├── backend
│   ├── controllers
│   ├── middlewares
│   ├── models
│   ├── routes
│   ├── utils
│   └── index.js
│
├── frontend
│   └── src
│       ├── components
│       ├── hooks
│       ├── redux
│       ├── pages
│       └── utils
│
└── README.md
```

---

# Installation

Clone the repository

```bash
git clone https://github.com/PraniketKolte-dev/hireflow.git
```

Backend

```bash
cd backend
npm install
npm run dev
```

Frontend

```bash
cd frontend
npm install
npm run dev
```

---

# Environment Variables

Backend

```env
PORT=
MONGO_URI=
SECRET_KEY=
CLOUD_NAME=
API_KEY=
API_SECRET=
```

---

# Future Improvements

- Edit Job Feature
- Pagination
- Email Verification
- Notifications
- Saved Jobs
- Advanced Filters
- Admin Dashboard

---

# Known Issues

- Company logo update requires additional production-side investigation.
- A brief loading state may display "No Jobs Found" before filtered results are rendered.

---

## License

This project was developed for educational and learning purposes. It is intended to demonstrate full-stack MERN development concepts and best practices.