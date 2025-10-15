# 🌐 UniPortal

![React](https://img.shields.io/badge/Frontend-ReactJS-blue?logo=react)
![Node.js](https://img.shields.io/badge/Backend-Node.js-green?logo=node.js)
![Firebase](https://img.shields.io/badge/Database-Firebase-orange?logo=firebase)
![Auth0](https://img.shields.io/badge/Auth-Auth0-red?logo=auth0)
![Status](https://img.shields.io/badge/Status-Completed-brightgreen)

> A comprehensive full-stack platform for exploring higher education opportunities in India.

---

## 🧩 Overview

**UniPortal** is a centralized platform that simplifies the process of discovering and selecting colleges in India.  
It provides reliable information, personalized recommendations, and a community-driven experience for students.

---

## 🎯 Problem Statement

Students in India often struggle with fragmented and unreliable data while researching colleges.  
**UniPortal** solves this by offering:
- Centralized, accurate information about colleges and programs  
- AI-based personalized recommendations  
- Advanced search and filtering tools  
- A community section for sharing authentic student experiences  

---

## 🚀 Key Features

- **Comprehensive College Database** – Detailed data including name, ratings, courses, fees, city, and acceptance rate  
- **Smart Search & Filters** – Search by course, city, state, or budget  
- **Personalized Recommendations** – Adaptive suggestions based on profile and search history  
- **Community Reviews** – Students can share experiences and insights  
- **Interactive UI** – Built with ReactJS and TailwindCSS for responsiveness  

---

## ⚙️ Tech Stack

| Layer | Technologies Used |
|-------|--------------------|
| **Frontend** | ReactJS, HTML5, CSS3, Tailwind CSS |
| **Backend** | Node.js (RESTful APIs) |
| **Database** | Firebase Firestore |
| **Authentication** | Auth0 by Okta |
| **Development Tools** | Visual Studio Code, Firebase Console |
| **Design Tools** | Canva, Draw.io |

---

## 🧠 System Architecture

```
Frontend (React + Tailwind)
        ↓
REST API (Node.js)
        ↓
Database (Firebase Firestore)
        ↓
Auth Layer (Auth0 by Okta)
```
<p align="center">
  <img width="904" height="78" alt="Flow" src="https://github.com/user-attachments/assets/e4729250-c6fc-4957-b112-53ac876198d0" /><br>
  <b>(Flow Diagram)</b>
</p>

<p align="center">
  <img width="977" height="657" alt="Architecture" src="https://github.com/user-attachments/assets/4dede18b-ed53-4cf8-a378-64418495bb89" />
<br>
  <b>(Architecture Diagram)</b>
</p>
---

## 🧭 Flow of the Application

1. **User Registration & Login**  
   Secure signup via Auth0 → user profile created in Firestore.

2. **Search & Filter Colleges**  
   Real-time queries with advanced filtering and sorting.

3. **Community Section**  
   Share experiences, view posts, and interact via likes and comments.

4. **Admin / Maintenance**  
   Regular data updates, validation, and performance monitoring.

---

## 💻 Getting Started

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/UniPortal.git
cd UniPortal
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory:
```
FIREBASE_API_KEY=<your-firebase-api-key>
AUTH0_DOMAIN=<your-auth0-domain>
AUTH0_CLIENT_ID=<your-auth0-client-id>
```

### 4️⃣ Run the Application
```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to view the app.

---

## 📸 UI Snapshots

<p align="center">
  <img width="839" height="420" alt="Search Page" src="https://github.com/user-attachments/assets/b1938521-6d03-4151-8a2b-fcf174b3367c" /><br>
  <b>(Start a Search Page with Filter option)</b>
</p>

<p align="center">
  <img width="839" height="422" alt="Search by Course/City" src="https://github.com/user-attachments/assets/1053085e-e6f4-4f11-9330-2f223ba7918b" /><br>
  <b>(Search Page with Search by Course and Search by City Functionality)</b>
</p>

<p align="center">
  <img width="854" height="261" alt="Course and City Example" src="https://github.com/user-attachments/assets/3f902b76-cd25-475a-be77-45b40493c70d" /><br>
  <b>(Search by Course and City Example with onClick Official College Page Redirection)</b>
</p>

<p align="center">
  <img width="868" height="435" alt="View Experiences" src="https://github.com/user-attachments/assets/6335bb67-4db6-4500-8522-c6ff4aeca11b" /><br>
  <b>(View other Students Experience)</b>
</p>

<p align="center">
  <img width="900" height="599" alt="Add Experience" src="https://github.com/user-attachments/assets/d8031a3b-4c71-47f3-8fb5-542d9265f58b" /><br>
  <b>(You can Add Your Experience)</b>
</p>

<p align="center">
  <img width="880" height="591" alt="Edit Experience" src="https://github.com/user-attachments/assets/00d2bd73-053b-4618-bac0-0ad1683054bd" /><br>
  <b>(You can Edit Your own Experience)</b>
</p>

<p align="center">
  <img width="1123" height="516" alt="About Page" src="https://github.com/user-attachments/assets/6aa0d6df-ea8c-4ba0-a39e-d221f54c8b8c" /><br>
  <b>(About Page where all the Project details are mentioned)</b>
</p>







---

## 🔮 Future Enhancements

- ✨ AI/NLP-based college search & recommendation  
- 📱 Fully responsive mobile version  
- 📊 Admin analytics & data insights  
- 🌍 Global expansion for international universities  
- 🧩 Peer mentorship & discussion forums  

---

## 📚 References

- [ReactJS](https://react.dev/)  
- [TailwindCSS](https://tailwindcss.com/)  
- [Firebase](https://console.firebase.google.com/)  
- [Auth0 by Okta](https://auth0.com/)  
- [Vite](https://vitejs.dev/guide/)  
- [Axios](https://axios-http.com/docs/intro)  
- [React Router](https://reactrouter.com/)  

---

## 👨‍💻 Author

**Tejas Uttare**  
B.Tech – Computer Science & Engineering (2021–2025)  
Unitedworld School of Computational Intelligence, Karnavati University  
📧 [tejas21btce48@karnavatiuniversity.edu.in](mailto:tejas21btce48@karnavatiuniversity.edu.in)

---

> _“Empowering students through data-driven insights and community collaboration.”_
