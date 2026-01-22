# 🎓 AI Course Generator

[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-black?style=for-the-badge&logo=vercel)](https://course-generator-nkfw.vercel.app/)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg?style=for-the-badge)](https://opensource.org/licenses/ISC)

> **Live Demo:** [https://course-generator-nkfw.vercel.app/](https://course-generator-nkfw.vercel.app/)

## 📖 About The Project

**Course Generator** is a powerful AI-driven full-stack application that automatically creates comprehensive, interactive educational courses. By leveraging state-of-the-art AI models, it generates structured modules, detailed lessons, and interactive quizzes tailored to any topic you choose.

What makes this project unique is its **multi-modal approach**: not only does it generate text content, but it also integrates relevant **YouTube videos** and creates **Hinglish audio lessons** using Google Cloud Text-to-Speech, making learning accessible and engaging for a wider audience.

## ✨ Key Features

*   **🤖 AI-Powered Content Generation**: utilizes **Groq (Llama 3.3)** to create deep, structured course outlines and lesson content.
*   **🌏 Hinglish TTS Support**: Automatically translates lesson content into Hinglish using **Gemini 1.5** and converts it to lifelike speech using **Google Cloud TTS**.
*   **🎥 Smart Video Integration**: Automatically searches for and embeds relevant YouTube tutorials for each lesson.
*   **📝 Interactive Quizzes**: Generates Multiple Choice Questions (MCQs) to test learner understanding.
*   **🔐 Secure Authentication**: Integrated with **Auth0** for secure user login and profile management.
*   **📄 PDF Export**: Download course materials for offline study.
*   **⚡ Modern Tech Stack**: Built with React, Vite, Node.js, and MongoDB for high performance and scalability.

## 🛠️ Built With

### Frontend
*   ![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB) **React**
*   ![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white) **Vite**
*   ![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white) **Tailwind CSS**
*   ![Chakra UI](https://img.shields.io/badge/Chakra_UI-319795?style=flat&logo=chakra-ui&logoColor=white) **Chakra UI**
*   **Framer Motion** (Animations)
*   **Auth0** (Authentication)

### Backend
*   ![NodeJS](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white) **Node.js**
*   ![Express](https://img.shields.io/badge/Express.js-000000?style=flat&logo=express&logoColor=white) **Express**
*   ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white) **MongoDB** (Mongoose)

### AI & Services
*   **Groq SDK** (Llama 3.3-70b-versatile)
*   **Google Gemini API** (Translation)
*   **Google Cloud Text-to-Speech**
*   **YouTube Data API**

## 🚀 Getting Started

Follow these steps to set up the project locally.

### Prerequisites

*   Node.js (v18 or higher recommended)
*   MongoDB (Local or Atlas URI)
*   API Keys for Groq, Google Cloud, and YouTube

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/your-username/course-generator.git
    cd course-generator
    ```

2.  **Install dependencies**
    Run the build script to install dependencies for both client and server:
    ```bash
    npm run build
    ```
    *Or manually:*
    ```bash
    cd client && npm install
    cd ../server && npm install
    ```

### Configuration

#### Server (`server/.env`)
Create a `.env` file in the `server` directory and add the following:

```env
MONGO_URI=your_mongodb_connection_string
GROQ_API_KEY=your_groq_api_key
YOUTUBE_API_KEY=your_youtube_api_key
GEMINI_API_KEY=your_gemini_api_key
# Optional: providing JSON credentials directly
GOOGLE_APPLICATION_CREDENTIALS_JSON={"type": "service_account", ...}
```

#### Client (`client/.env`)
Create a `.env` file in the `client` directory and add your Auth0 credentials:

```env
VITE_AUTH0_DOMAIN=your_auth0_domain
VITE_AUTH0_CLIENT_ID=your_auth0_client_id
VITE_AUTH0_AUDIENCE=your_auth0_audience
```

### Running the App

1.  **Start the Server** (From the root or server directory)
    ```bash
    npm start
    # or
    cd server && npm run dev
    ```

2.  **Start the Client** (From the client directory)
    ```bash
    cd client && npm run dev
    ```

3.  Visit `http://localhost:5173` (or the port shown in your terminal) to view the app.

## 🤝 Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

Distributed under the ISC License. See `package.json` for more information.
