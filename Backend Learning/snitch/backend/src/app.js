import express from "express"
import morgan from "morgan"
import cookieParser from "cookie-parser"
import authRoutes from "./routes/auth.routes.js";
import cors from "cors";

const app = express()
app.use(morgan("dev"))
app.use(express.json())
app.use(cookieParser())

app.use(
  cors({
    origin: "http://localhost:5173", // Must be your exact frontend URL (cannot use "*" when credentials is true)
    credentials: true, // Allows cookies (your JWT token) to be sent & received
  })
);

app.use("/api/auth",authRoutes)


export default app