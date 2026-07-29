<div align="center">

<h1>🎵 Moodify</h1>

<p><strong>AI-powered music player that reads your face and plays the perfect song</strong></p>

<p>
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-Mongoose-47A248?style=for-the-badge&logo=mongodb&logoColor=white" />
  <img src="https://img.shields.io/badge/Redis-Cache-DC382D?style=for-the-badge&logo=redis&logoColor=white" />
  <img src="https://img.shields.io/badge/MediaPipe-Face%20Detection-4285F4?style=for-the-badge&logo=google&logoColor=white" />
</p>

<p>
  <img src="https://img.shields.io/badge/status-in%20development-orange?style=flat-square" />
  <img src="https://img.shields.io/badge/day-79-blueviolet?style=flat-square" />
  <img src="https://img.shields.io/github/last-commit/chahitshah/mern-journey?style=flat-square" />
</p>

</div>

---

## ✨ What is Moodify?

**Moodify** is a full-stack MERN application that uses your **webcam + AI face analysis** to detect your current mood in real time, then automatically fetches and plays a song that matches how you feel.

> Point your face at the camera → AI detects your expression → 🎵 Music plays

---

## 🎬 Features

| Feature | Description |
|---------|-------------|
| 😄 **Mood Detection** | Real-time facial expression analysis using Google MediaPipe |
| 🎵 **Smart Song Matching** | Fetches songs from the database filtered by detected mood |
| ▶ **Full Music Player** | Play/Pause, seek bar, +/-5s skip, volume, and speed control |
| 💿 **Spinning Vinyl UI** | Animated album art disc with glow effects |
| 🔐 **JWT Auth + Redis** | Secure authentication with Redis-based token blacklisting |
| 🚪 **Smart Logout** | Tokens are instantly invalidated in Redis on logout |
| 🎨 **Premium UI** | Dark glassmorphism design with micro-animations |

---

## 🛠️ Tech Stack

### Frontend
- **React 19** + Vite
- **MediaPipe Tasks Vision** — Face Landmarker for emotion detection
- **React Router DOM v7** — client-side routing
- **Axios** — HTTP client
- **Vanilla CSS** — glassmorphism, animations, custom sliders
- **Context API** — global song & auth state

### Backend
- **Node.js** + **Express.js** — REST API (MVC pattern)
- **MongoDB** + **Mongoose** — database & ODM
- **Redis** (ioredis) — JWT blacklist cache
- **JWT** — stateless auth tokens via HTTP-only cookies
- **Multer** — multipart file upload handling
- **node-id3** — reads ID3 metadata from MP3 files
- **Cloudinary / Storage Service** — cloud file hosting

---

## 🗂️ Project Structure

```
project2/
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   │   ├── auth.controller.js     # login, register, logout, getMe
│   │   │   └── song.controller.js     # uploadSong, getSong by mood
│   │   ├── middlewares/
│   │   │   ├── auth.middleware.js     # JWT verify + Redis blacklist check
│   │   │   └── upload.middleware.js   # Multer config
│   │   ├── models/
│   │   │   ├── user.model.js          # User schema (password: select false)
│   │   │   ├── song.model.js          # Song schema (url, posterUrl, mood)
│   │   │   └── blacklist.model.js     # DB backup for blacklisted tokens
│   │   ├── routes/
│   │   │   ├── auth.route.js          # /api/auth/*
│   │   │   └── song.route.js          # /api/songs/*
│   │   ├── services/
│   │   │   └── storage.service.js     # Cloud upload helper
│   │   ├── config/
│   │   │   └── cache.js               # ioredis Redis connection
│   │   └── app.js                     # Express app setup + CORS
│   └── server.js                      # Entry point
│
└── frontend/
    └── src/
        ├── features/
        │   ├── auth/                  # Login, Register, Protected route
        │   ├── home/
        │   │   ├── components/
        │   │   │   └── Player.jsx     # Full music player component
        │   │   ├── hooks/
        │   │   │   └── useSong.js     # Fetch song by mood
        │   │   ├── pages/
        │   │   │   └── Home.jsx       # Main page layout
        │   │   ├── services/
        │   │   │   └── song.api.js    # Axios API calls
        │   │   └── song.context.jsx   # Global song state
        │   └── expression/
        │       ├── components/
        │       │   └── FaceExpression.jsx
        │       └── utils/
        │           └── utils.js       # MediaPipe init + detect
        └── App.jsx
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB (local or Atlas)
- Redis (local or Redis Cloud)

### 1. Clone the repo
```bash
git clone https://github.com/chahitshah/mern-journey.git
cd mern-journey/Backend\ Learning/project2
```

### 2. Backend setup
```bash
cd backend
npm install
```

Create a `.env` file:
```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
REDIS_URL=your_redis_cloud_url
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

```bash
npx nodemon server.js
```

### 3. Frontend setup
```bash
cd frontend
npm install
npm run dev
```

Open **http://localhost:5173**

---

## 🔌 API Reference

### Auth
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/auth/register` | Register new user |
| `POST` | `/api/auth/login` | Login + receive JWT cookie |
| `GET`  | `/api/auth/logout` | Logout + blacklist token in Redis |
| `GET`  | `/api/auth/get-me` | Get current user (protected) |

### Songs
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/songs` | Upload a song with mood tag |
| `GET`  | `/api/songs?mood=happy` | Get a song matching the mood |

---

## 🔐 Auth Flow

```
Register/Login → JWT stored in httpOnly cookie
     ↓
Protected request → auth.middleware checks cookie
     ↓
Redis.get(token) → if blacklisted → 401 Invalid Token
     ↓
jwt.verify(token) → inject user into req → next()
     ↓
Logout → Redis.set(token, "blacklisted") + clear cookie
```

---

## 🎭 Emotion → Music Flow

```
User opens Moodify
     ↓
MediaPipe loads Face Landmarker model (WASM)
     ↓
Webcam activates → face blendshapes analyzed
     ↓
Expression detected: Happy 😄 / Sad 😢 / Surprised 😲 / Neutral 😐
     ↓
GET /api/songs?mood={expression}
     ↓
Song loaded into React Context → Player renders & plays 🎵
```

---

## 🎨 UI Design Highlights

- **Glassmorphism** card with `backdrop-filter: blur`
- **Spinning vinyl disc** with center hole detail (CSS-only)
- **Animated glow rings** that pulse while playing
- **Gradient progress bar** with glow shadow
- **Spring animations** on buttons using `cubic-bezier(0.34, 1.56, 0.64, 1)`
- **Custom range sliders** with CSS `linear-gradient` fill trick
- **Floating orb background** animated with `@keyframes`

---

## 📅 Development Log

| Day | What was built |
|-----|----------------|
| Day 79 | User auth (JWT + Redis blacklisting), Song upload/fetch API, Face expression detection, Full music player UI with skip/speed/volume |

---

## 🙏 Credits & Learning

This project is part of my **#100DaysOfCode / MERN Journey** — learning full-stack development step by step.

**Technologies learned building this:**
- `select: false` in Mongoose + `.select("+password")`
- Redis as a real-time JWT blacklist (faster than DB lookup)
- Google MediaPipe Face Landmarker (WASM in browser)
- HTML5 Audio API for custom player controls
- CSS glassmorphism & advanced animations
- React Context API for global state

---

<div align="center">
  <p>Made with ❤️ by <strong>Chahit Shah</strong></p>
  <p>⭐ Star this repo if you found it useful!</p>
</div>
