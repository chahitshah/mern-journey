# Aura Space - MERN Stack Private Social Network

Aura Space is a feature-rich, full-stack social media platform built using the MERN stack. It features a private follow-request model, media sharing with ImageKit integration, post interaction (likes/unlikes), and a dynamic personalized feed.

---

## 🚀 Key Features

*   **Secure Authentication**: Session-based user sign-up and login utilizing JSON Web Tokens (JWT) stored securely in cookies, paired with password hashing via `bcrypt`.
*   **Privacy-Centric Social Graph**: 
    *   Send and receive follow requests.
    *   Approve or reject pending follow requests.
    *   Customized follow suggestions to discover other active users.
*   **Post & Media Sharing**: Creation of posts containing text descriptions and image uploads powered by **ImageKit** for optimized cloud hosting.
*   **Engagement Systems**: Real-time likes and unlikes on user posts.
*   **Personalized Feed**: A custom feed view displaying posts exclusively from users that you follow.
*   **Modern CSS Architecture**: Tailored responsive layouts styled using Sass/SCSS.

---

## 🛠️ Tech Stack

### Frontend
*   **Framework**: [React 19](https://react.dev/)
*   **Bundler**: [Vite](https://vite.dev/)
*   **Routing**: [React Router v7](https://reactrouter.com/)
*   **Styling**: Sass/SCSS
*   **HTTP Client**: Axios

### Backend
*   **Runtime**: Node.js
*   **Framework**: [Express 5](https://expressjs.com/)
*   **Database**: [MongoDB](https://www.mongodb.com/) (Object modeling via [Mongoose](https://mongoosejs.com/))
*   **Media Hosting**: [ImageKit.io](https://imagekit.io/)
*   **File Handling**: Multer (In-memory storage)

---

## 📁 Repository Structure

```text
project1/
├── backend/
│   ├── src/
│   │   ├── config/          # Database configuration
│   │   ├── controllers/     # Business logic for auth, posts, & users
│   │   ├── middleware/      # Authentication & route protection
│   │   ├── models/          # Mongoose schemas (User, Post, Like, Follow)
│   │   ├── routes/          # Express API endpoints routing
│   │   └── app.js           # Server application mounting
│   ├── server.js            # Server entry point
│   └── .env                 # Environment configurations
└── frontend/
    ├── src/
    │   ├── features/        # Feature modules (auth, post, shared, user)
    │   │   ├── auth/        # Login/Register pages, state, & services
    │   │   ├── post/        # Post creation & Feed components
    │   │   ├── user/        # Profile features, follow workflows, & context
    │   │   └── shared/      # Common components & layout utilities
    │   ├── App.jsx          # Route rendering
    │   ├── routes.jsx       # Client router declarations
    │   └── style.scss       # Global Sass variables & design system
    ├── index.html           # HTML template
    └── vite.config.js       # Vite build configurations
```

---

## ⚙️ Installation & Setup

### Prerequisites
*   Node.js (v18+ recommended)
*   MongoDB Instance (Atlas or Local)
*   [ImageKit.io](https://imagekit.io/) account for image uploads

### 1. Backend Configuration
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend/` root directory and fill in the following configurations:
   ```env
   MONGO_URI="your_mongodb_connection_string"
   JWT_SECRET="your_secure_jwt_secret_key"
   IMAGEKIT_PRIVATE_KEY="your_imagekit_private_api_key"
   ```
4. Start the backend development server:
   ```bash
   npm run dev # or node server.js
   ```
   *The backend will boot up on port `3000` (e.g., `http://localhost:3000`).*

### 2. Frontend Configuration
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
   *The frontend will run on port `5173` (e.g., `http://localhost:5173`).*

---

## 🔌 API Endpoints Reference

### 🔐 Authentication (`/api/auth`)
*   `POST /register` - Registers a new user.
*   `POST /login` - Log in a user and set a session cookie.
*   `GET /get-me` - Retrieve details of the currently authenticated user session.

### 📝 Posts & Likes (`/api/posts`)
*   `POST /` - Create a post (accepts multipart/form-data with an `image` file and `description`).
*   `GET /` - Fetch all posts.
*   `GET /details/:postId` - Retrieve details of a specific post.
*   `POST /like/:postId` - Like a post.
*   `DELETE /unlike/:postId` - Unlike a post.
*   `GET /feed` - Fetch customized feed containing posts from followed users.

### 👥 Connections & Users (`/api/users`)
*   `POST /follow/:username` - Send a follow request or follow a user.
*   `POST /unfollow/:username` - Unfollow a user.
*   `GET /pending-requests` - Retrieve all pending incoming follow requests.
*   `POST /accept/:requestId` - Accept a follow request.
*   `POST /reject/:requestId` - Decline a follow request.
*   `GET /suggestions` - Fetch suggested users to follow.
*   `GET /following` - Retrieve list of users currently followed.
