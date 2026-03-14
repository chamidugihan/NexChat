# 💬 NexChat — Real-Time MERN Chat Application

<div align="center">

![NexChat Banner](https://img.shields.io/badge/NexChat-Real--Time%20Chat-7928CA?style=for-the-badge&logo=chatbot&logoColor=white)

[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://mongodb.com)
[![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)](https://expressjs.com)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org)
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org)
[![Socket.io](https://img.shields.io/badge/Socket.io-010101?style=for-the-badge&logo=socket.io&logoColor=white)](https://socket.io)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

A full-stack real-time chat application built with the MERN stack, featuring instant messaging, secure authentication, image sharing, and 32 beautiful themes.

[Features](#-features) • [Tech Stack](#-tech-stack) • [Getting Started](#-getting-started) • [Environment Variables](#-environment-variables) • [API Endpoints](#-api-endpoints) • [Deployment](#-deployment)

</div>

---

## ✨ Features

- 💬 **Real-time messaging** powered by Socket.io
- 🔐 **Secure authentication** with JWT & HTTP-only cookies
- 📸 **Image sharing** via Cloudinary uploads
- 🟢 **Online/offline status** for all users
- 🎨 **32 beautiful themes** with DaisyUI
- 👤 **Profile management** with avatar upload
- 🔒 **Protected routes** — auth required to access chat
- 📱 **Responsive design** — works on mobile and desktop
- 🧑‍🤝‍🧑 **User avatars** auto-generated from name using DiceBear
- ⚡ **Instant UI updates** — no page refresh needed

---

## 🛠 Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| React 18 | UI framework |
| Zustand | State management |
| React Router v6 | Client-side routing |
| Tailwind CSS | Styling |
| DaisyUI | UI components + 32 themes |
| Socket.io Client | Real-time communication |
| Axios | HTTP requests |
| React Hot Toast | Notifications |
| Lucide React | Icons |

### Backend
| Technology | Purpose |
|-----------|---------|
| Node.js | Runtime environment |
| Express.js | Web framework |
| MongoDB + Mongoose | Database |
| Socket.io | WebSocket server |
| JWT | Authentication |
| bcryptjs | Password hashing |
| Cloudinary | Image storage |
| cookie-parser | Cookie handling |
| dotenv | Environment variables |

---

## 📁 Project Structure

```
NexChat/
├── backend/
│   └── src/
│       ├── controllers/
│       │   ├── auth.controller.js
│       │   └── message.controller.js
│       ├── lib/
│       │   ├── cloudinary.js
│       │   ├── db.js
│       │   ├── socket.js
│       │   └── utils.js
│       ├── middleware/
│       │   └── auth.middleware.js
│       ├── models/
│       │   ├── user.model.js
│       │   └── message.model.js
│       ├── routes/
│       │   ├── auth.route.js
│       │   └── message.route.js
│       └── index.js
│
├── frontend/
│   └── src/
│       ├── components/
│       │   ├── skeletons/
│       │   ├── AuthImagePattern.jsx
│       │   ├── ChatContainer.jsx
│       │   ├── ChatHeader.jsx
│       │   ├── MessageInput.jsx
│       │   ├── Navbar.jsx
│       │   ├── NoChatSelected.jsx
│       │   └── Sidebar.jsx
│       ├── constants/
│       │   └── index.js
│       ├── lib/
│       │   ├── axios.js
│       │   └── utils.js
│       ├── pages/
│       │   ├── HomePage.jsx
│       │   ├── LoginPage.jsx
│       │   ├── ProfilePage.jsx
│       │   ├── SettingsPage.jsx
│       │   └── SignUpPage.jsx
│       ├── store/
│       │   ├── useAuthStore.js
│       │   ├── useChatStore.js
│       │   └── useThemeStore.js
│       └── App.jsx
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org) v18+
- [MongoDB](https://mongodb.com) or MongoDB Atlas account
- [Cloudinary](https://cloudinary.com) account

### Installation

**1. Clone the repository:**
```bash
git clone https://github.com/chamidugihan/NexChat.git
cd NexChat
```

**2. Install backend dependencies:**
```bash
cd backend
npm install
```

**3. Install frontend dependencies:**
```bash
cd ../frontend
npm install
```

**4. Set up environment variables** (see below)

**5. Run the development servers:**

Backend (from `/backend`):
```bash
npm run dev
```

Frontend (from `/frontend`):
```bash
npm run dev
```

**6. Open your browser:**
```
http://localhost:5173
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `/backend` folder:

```env
# Server
PORT=5001
NODE_ENV=development

# MongoDB
MONGODB_URI=your_mongodb_connection_string

# JWT
JWT_SECRET=your_jwt_secret_key

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Create a `.env.development` file inside the `/frontend` folder:
```env
VITE_API_URL=http://localhost:5001/api
```

---

## 📡 API Endpoints

### Auth Routes `/api/auth`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/signup` | Register new user | ❌ |
| POST | `/login` | Login user | ❌ |
| POST | `/logout` | Logout user | ✅ |
| PUT | `/update-profile` | Update profile picture | ✅ |
| GET | `/check` | Check auth status | ✅ |

### Message Routes `/api/message`

| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/user` | Get all users for sidebar | ✅ |
| GET | `/:id` | Get messages with a user | ✅ |
| POST | `/send/:id` | Send a message | ✅ |

---

## 🔌 Socket.io Events

| Event | Direction | Description |
|-------|-----------|-------------|
| `connection` | Client → Server | User connects |
| `disconnect` | Client → Server | User disconnects |
| `getOnlineUsers` | Server → Client | Broadcast online user IDs |
| `newMessage` | Server → Client | New message received |

---

## 🎨 Themes

NexChat supports **32 DaisyUI themes**:

`light` `dark` `cupcake` `bumblebee` `emerald` `corporate` `synthwave` `retro` `cyberpunk` `valentine` `halloween` `garden` `forest` `aqua` `lofi` `pastel` `fantasy` `wireframe` `black` `luxury` `dracula` `cmyk` `autumn` `business` `acid` `lemonade` `night` `coffee` `winter` `dim` `nord` `sunset`

---

## ☁️ Deployment

### Backend — Render

1. Create a new **Web Service** on [Render](https://render.com)
2. Connect your GitHub repository
3. Set build command: `npm install`
4. Set start command: `npm start`
5. Add all environment variables from `.env`

### Frontend — Vercel

1. Import your repo on [Vercel](https://vercel.com)
2. Set root directory to `frontend`
3. Add environment variable:
   ```
   VITE_API_URL=https://your-backend.onrender.com/api
   ```
4. Deploy!

---

## 📸 Screenshots

> Add screenshots of your app here

| Login Page | Chat Page | Profile Page | Settings |
|-----------|-----------|-------------|---------|
| ![Login](#) | ![Chat](#) | ![Profile](#) | ![Settings](#) |

---

## 🤝 Contributing

Contributions are welcome! Feel free to open a pull request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Chamidu Gihan**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/chamidugihan)

---

<div align="center">

Made with ❤️ from Sri Lanka 🇱🇰

⭐ Star this repo if you found it helpful!

</div>
