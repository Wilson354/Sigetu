import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

import AlumnoLayout from "layouts/Alumno.js";
import DocenteLayout from "layouts/Docente.js";
import AuthLayout from "layouts/Auth.js";

//rutas para el crud escenciales
import Show from 'views/examples/crudshow';
import Create from 'views/examples/crudcreate';
import Edit from 'views/examples/crudedit';
import Showd from 'views/examples/division';

//rutas buenas
import { AuthProvider } from "context/AuthContext";

import LoginView from "views/LoginView";
import Index from "views/sigetu/estudiantes/HomeEstudiante";

function App() {


  return (
    <div className="App">

      <AuthProvider>
        <BrowserRouter>
          <Routes>

            <Route path="/alumno/*" element={<AlumnoLayout />} />
            <Route path="/docente/*" element={<DocenteLayout />} />
            <Route path="/auth/*" element={<AuthLayout />} />
            <Route path="/" element={<Navigate to="/auth/login" replace />} />

            <Route  path="/" element= {< App />}/>
            <Route  path="login" element= {< LoginView />} />
            <Route  path="dashboardA" element= {< Index />} />

            <Route path="/show" element={<Show />} />
            <Route path="/create" element={<Create />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/division" element={<Showd />} />

          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

