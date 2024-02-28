import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import firebaseApp from "firebase.config";
import { getAuth, signOut } from "firebase/auth";

//vistas
import AdminView from "../../components/AdminView";
import AlumnoView from "../../components/AlumnoView";
import DocenteView from "../../components/DocenteView";

import Show from 'views/examples/crudshow';
import Create from 'views/examples/crudcreate';
import Edit from 'views/examples/crudedit';
import Showd from 'views/examples/division';
import AlumnoLayout from "layouts/Alumno.js";
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
        <AlumnoView/>
      )}
    </div>
  );
}

export default function HomeWrapper(props) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home {...props} />} />

      {/* Rutas anidadas para alumno solo permitiran su acceso a alumno*/}
        <Route path="/alumno/*" element={<AlumnoLayout />}>
 
          <Route path="show" element={<Show />} />
          <Route path="create" element={<Create />} />
          <Route path="edit" element={<Edit />} />
          <Route path="showd" element={<Showd />} />
        </Route>

        <Route path="/auth/*" element={<AuthLayout />} />
      </Routes>
    </Router>

  );
}