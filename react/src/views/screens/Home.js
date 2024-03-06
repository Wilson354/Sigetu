import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import firebaseApp from "firebase.config";
import { getAuth, signOut } from "firebase/auth";

//vistas
import AdminView from "../../components/AdminView";
import AlumnoLayout from "layouts/Alumno";
import AuthLayouth from "layouts/Auth";
import DocenteLayout from "layouts/Docente";

const auth = getAuth(firebaseApp);

function Home({ user }) {
  
  return (
    <div>
      {user.rol === "admin" ? (
        <AdminView />
      ) : user.rol === "docente" ? (
        <DocenteLayout />
      ) : (
        <AlumnoLayout/>
      )}
    </div>
  );
}

export default function HomeWrapper(props) {
  return (
      <Routes>
        <Route path="/" element={<Home {...props} />} />

      {/* Rutas anidadas para alumno solo permitiran su acceso a alumno*/}
        <Route path="/alumno/*" element={<AlumnoLayout />} />
        
        <Route path="/docente/*" element={<DocenteLayout />} />
          
        <Route path="/auth/*" element={<AuthLayouth />} />
      </Routes>

  );
}