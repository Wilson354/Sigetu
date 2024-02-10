
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AlumnoLayout from "layouts/Alumno.js";
import DocenteLayout from "layouts/Docente.js";
import AuthLayout from "layouts/Auth.js";

import { AuthProvider } from "context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <AuthProvider>
  <BrowserRouter>
    <Routes>
      
      <Route path="/alumno/*" element={<AlumnoLayout />} />
      <Route path="/docente/*" element={<DocenteLayout />} />
      <Route path="/auth/*" element={<AuthLayout />} />
      <Route path="*" element={<Navigate to="/auth/login" replace />} />
      
    </Routes>
  </BrowserRouter>
  </AuthProvider>
);
