import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

// Rutas buenas
import React, { useState, useEffect } from "react";
import { AuthProvider } from "context/AuthContext";
import Home from "views/screens/Home";

// Firebase
import firebaseApp from "firebase.config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Auth from "layouts/Auth";

const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

function App() {
  const [user, setUser] = useState(null);

  let timeoutId;

  const resetTimer = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      setUser(null);
      console.log("¡Sesión cerrada por inactividad!");
      window.location.href = "/auth/login";
    }, 10 * 60 * 1000); // 10 minutos en milisegundos
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        setUserWithFirebaseAndRol(usuarioFirebase);
        resetTimer();
      } else {
        setUser(null);
      }
    });

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      unsubscribe();
      window.removeEventListener("beforeunload", handleBeforeUnload);
      clearTimeout(timeoutId);
    };
  }, []);

  const handleBeforeUnload = () => {
    setUser(null);
    console.log("¡Sesión cerrada antes de descargar la página!");
  };

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

  const handleUserActivity = () => {
    resetTimer();
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleUserActivity);
    window.addEventListener("keypress", handleUserActivity);

    return () => {
      window.removeEventListener("mousemove", handleUserActivity);
      window.removeEventListener("keypress", handleUserActivity);
    };
  }, []);

  return (
    <AuthProvider>
      <>
        {user ? <Home user={user} /> : <Auth />}
      </>
    </AuthProvider>
  );
}

export default App;