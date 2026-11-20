import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../features/auth/components/pages/Login.jsx";
import Register from "../features/auth/components/pages/Register.jsx";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/register" replace />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/register" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
