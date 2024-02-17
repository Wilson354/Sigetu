import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminView from "../../components/AdminView";
import UserView from "../../components/UserView";
import firebaseApp from "firebase.config";
import { getAuth, signOut } from "firebase/auth";

import Show from 'views/examples/crudshow';
import Create from 'views/examples/crudcreate';
import Edit from 'views/examples/crudedit';
import Showd from 'views/examples/division';
import AlumnoLayout from "layouts/Alumno.js";
import AuthLayout from "layouts/Auth.js";
import Index from "views/sigetu/estudiantes/HomeEstudiante";

const auth = getAuth(firebaseApp);

function Home({ user }) {
  return (
    <div>
      Home
      <button onClick={() => signOut(auth)}> Cerrar sesión</button>
      {user.rol === "admin" ? <AdminView /> : <UserView />}
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
          <Route index element={<Index />} />
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
