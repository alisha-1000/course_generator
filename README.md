# 🎓 AI Course Generator

[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=for-the-badge&logo=vercel)](https://course-generator-nkfw.vercel.app/)
[![Deployed on Render](https://img.shields.io/badge/Deployed-Render-46E3B7?style=for-the-badge&logo=render)](https://course-generator-3.onrender.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20-339933?style=for-the-badge&logo=nodedotjs)](https://nodejs.org/)

> **Instantly generate comprehensive, interactive courses on any topic using AI.**

**Live Demo:** [https://course-generator-nkfw.vercel.app/](https://course-generator-nkfw.vercel.app/)
**Backend API:** [https://course-generator-3.onrender.com/](https://course-generator-3.onrender.com/)

---

## 📖 Overview

**Course Generator** is an intelligent full-stack platform designed to democratize education. By simply entering a topic, users can generate a complete 5-8 module course featuring:
- **Detailed Lessons**: Structured educational content with clear objectives.
- **Multimodal Learning**: Embedded YouTube videos and AI-generated Hinglish audio lessons.
- **Interactive Assessments**: Knowledge-check quizzes (MCQs) for every lesson.
- **Progressive Learning**: Content that builds in complexity.

## ✨ Key Features

- **🤖 Autonomous Content Creation**: Powered by **Groq (Llama 3.3)** for high-speed, high-quality educational drafting.
- **🎙️ Hinglish Audio Support**: Bridges the language gap by translating content into Hinglish (via **Gemini 1.5**) and converting it to speech using **Google Cloud TTS**.
- **📺 Smart Video Discovery**: Automatically finds and embeds relevant YouTube tutorials using the YouTube Data API.
- **🔒 Enterprise-Grade Auth**: Secure login and user profiles handled by **Auth0**.
- **🎨 Modern Dashboard**: Sleek, responsive UI built with **Chakra UI** and **Framer Motion**.
- **📑 Portable Learning**: Export courses to **PDF** or view them in an interactive lesson player.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18 (Vite)
- **Styling**: Chakra UI, Tailwind CSS
- **Animations**: Framer Motion
- **Auth**: Auth0
- **State/Routing**: React Router DOM, Axios

### Backend
- **Runtime**: Node.js (Express)
- **Database**: MongoDB (Mongoose)
- **AI Models**: Groq (Llama 3.3), Google Gemini 1.5 Flash
- **Cloud Services**: Google Cloud Text-to-Speech

---

## Getting Started

### Prerequisites
- **Node.js** (v20.x recommended)
- **MongoDB** (Local or Atlas)
- **API Keys**: Groq, Google Cloud (Service Account), Gemini, YouTube Data API v3

### Installation

1. **Clone the Repo**
   ```bash
   git clone https://github.com/alisha-1000/course_generator.git
   cd course_generator
   ```

2. **Install All Dependencies**
   ```bash
   npm run build
   ```

3. **Environment Setup**
   
   **Server (`server/.env`):**
   ```env
   MONGO_URI=your_mongodb_uri
   GROQ_API_KEY=your_groq_key
   YOUTUBE_API_KEY=your_youtube_key
   GEMINI_API_KEY=your_gemini_key
   GOOGLE_APPLICATION_CREDENTIALS_JSON={"type": "service_account", ...}
   ```

   **Client (`client/.env`):**
   ```env
   VITE_AUTH0_DOMAIN=your_auth0_domain
   VITE_AUTH0_CLIENT_ID=your_id
   VITE_AUTH0_AUDIENCE=your_audience
   ```

4. **Run the Application**
   ```bash
   # Start backend
   cd server && npm run dev
   
   # Start frontend (new terminal)
   cd client && npm run dev
   ```

---


