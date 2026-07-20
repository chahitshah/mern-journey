# 🚀 MERN Stack Journey - Portfolio & Learning Space

Welcome to my **MERN Stack learning repository**! This workspace documents my daily progression, exercises, and capstone projects as I master full-stack web development using MongoDB, Express, React, and Node.js.

---

## 📂 Repository Structure

The repository is divided into two primary tracks: **Frontend learning** (fundamental JavaScript, DOM, React foundations) and **Backend Learning** (Express servers, REST APIs, databases, and full-stack integrations).

```text
mern-journey/
├── Frontend learning/      # Frontend development milestones (Day 1 to 24)
│   ├── day1 - day24/       # Daily progressive coding challenges & lessons
│   ├── DOM/                # Vanilla JS DOM manipulation exercises
│   └── React/              # React components and rendering fundamentals
│
└── Backend Learning/       # Server-side architecture & Database systems
    ├── day1 - day12/       # Daily Node/Express lessons (Routes, Controllers, Middleware)
    └── project1/           # Capstone MERN Project: AURA Space (Social Media App)
        ├── backend/        # Express REST API, Mongoose schemas, ImageKit uploading
        └── frontend/       # Vite React client with premium Light Glassmorphism UI
```

---

## 🌟 Capstone Project: AURA Space (MERN Social Media App)

Located in `Backend Learning/project1/`, **AURA Space** is a custom social media web application designed with a premium, modern **Light Glassmorphism visual identity**.

### Key Features
* **Floating Glass Header:** Modern centered navbar featuring dynamic logged-in user profile widgets and indicator glows.
* **Obsidian-Light Sidebar:** Sticky dashboard modules displaying **Follow Requests** (Accept/Reject action flows), **Following Count & List** (with instant Unfollow triggers), and **Suggested Creators** (with Follow triggers).
* **Media Upload Dropzone:** Drag-and-drop style upload area in the Create Post flow with real-time image preview and character limit counters.
* **Post Interactions:** Hover-glowing post cards featuring responsive image blocks and interactive liked/unliked heart state pop animations.
* **Secure Authentication:** Cookie-persistent JWT session checkups, password hashing via Bcrypt, and account registration.

### Tech Stack
* **Frontend:** React (Vite), Axios, SASS/SCSS, React Router DOM, Remix Icons, CSS Glassmorphic effects.
* **Backend:** Node.js, Express, MongoDB (Mongoose ORM), Multer (file parsing), ImageKit SDK (cloud storage), JSON Web Tokens (JWT), BcryptJS.

---

## 🛠️ Installation & Setup (AURA Space)

### Prerequisite Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/chahitshah/mern-journey.git
   ```
2. Navigate to the project directory:
   ```bash
   cd "Backend Learning/project1"
   ```

### 1. Backend Setup
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in `backend/` and configure your credentials:
   ```env
   PORT=3000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
   ```
4. Start the server in development mode:
   ```bash
   npx nodemon server.js
   ```

### 2. Frontend Setup
1. Open a new terminal window and navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm run dev
   ```
4. Open your browser and navigate to `http://localhost:5173`.

---

## 📈 Learning Milestones Summary

### 🔹 Frontend Milestones (Day 1 - Day 24)
* **JS Core:** Execution context, scopes, array manipulation, async promises, and event loops.
* **DOM Manipulation:** Selecting selectors, attaching listeners, creating interactive menus, and animating cards.
* **React Foundations:** Component hierarchy, state variables (`useState`, `useEffect`), shared context (`createContext`), custom hooks, and route configurations.

### 🔹 Backend Milestones (Day 1 - Day 12)
* **Node.js & Express:** Structuring models-views-controllers (MVC), writing routing systems, and integrating CORS/cookie parsers.
* **Mongoose & Database Design:** Modeling standard schemas, indexing unique columns, and populating referenced ObjectId documents.
* **Security & Storage:** Managing user sessions with JWT, securing database passwords with Bcrypt, and writing custom auth verification middleware.

---

## 👤 About Me

Hi, I'm **Chahit Shah**! 👋
I am an aspiring **Full-Stack Developer** passionate about building clean, high-performance, and visually stunning web applications.

* **🔭 I’m currently working on:** Building MERN-stack social applications and refining database relations.
* **🌱 I’m currently learning:** Advanced backend architecture, database optimization, and modern UI/UX design trends (like glassmorphism, responsive grids, and transitions).
* **💻 Technical Arsenal:** JavaScript (ES6+), React.js, Node.js, Express.js, MongoDB, SASS/SCSS, Git.
* **📬 Connect with me:**
  * GitHub: [@chahitshah](https://github.com/chahitshah)

