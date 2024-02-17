import React, { useState, useEffect } from "react";

import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

// Rutas buenas
import { AuthProvider } from "context/AuthContext";
import Login from "views/screens/Login";
import Home from "views/screens/Home";

// Firebase
import firebaseApp from "firebase.config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        setUserWithFirebaseAndRol(usuarioFirebase);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  async function getRol(uid) {
    const docuRef = doc(firestore, `usuarios/${uid}`);
    const docuCifrada = await getDoc(docuRef);
    const infoFinal = docuCifrada.data().rol;
    return infoFinal;
  }

  async function setUserWithFirebaseAndRol(usuarioFirebase) {
    const rol = await getRol(usuarioFirebase.uid);
    const userData = {
      uid: usuarioFirebase.uid,
      email: usuarioFirebase.email,
      rol: rol,
    };
    setUser(userData);
    console.log("userData final", userData);
  }

  return (
    <AuthProvider>
      <>
        {user ? <Home user={user} /> : <Login />}
      </>
    </AuthProvider>
  );
}

export default App;
