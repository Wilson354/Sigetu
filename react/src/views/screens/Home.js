import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import firebaseApp from "firebase.config";
import { getAuth, signOut } from "firebase/auth";

//vistas
import AdminView from "../../components/AdminView";
import DocenteView from "../../components/DocenteView";

import Show from 'views/examples/crudshow';
import Create from 'views/examples/crudcreate';
import Edit from 'views/examples/crudedit';
import Showd from 'views/examples/division';
import AlumnoLayout from "layouts/Alumno";
import AuthLayout from "layouts/Auth.js";


const auth = getAuth(firebaseApp);

function Home({ user }) {
  
  return (
    <div>
      {user.rol === "admin" ? (
        <AdminView />
      ) : user.rol === "docente" ? (
        <DocenteView />
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
        
          
        <Route path="/auth/*" element={<AuthLayout />} />
      </Routes>

  );
}