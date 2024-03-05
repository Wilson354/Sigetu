import "assets/plugins/nucleo/css/nucleo.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/scss/argon-dashboard-react.scss";

// Rutas buenas
import React, { useState, useEffect } from "react";
import { AuthProvider } from "context/AuthContext";
import Login from "views/screens/Login";
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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        setUserWithFirebaseAndRol(usuarioFirebase);
        // Reiniciar temporizador de inactividad al iniciar sesión
        resetTimer();
      } else {
        setUser(null);
      }
    });

    return () => clearTimeout(timeoutId);
  }, []);

  let timeoutId;
  const resetTimer = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      // Cerrar sesión por inactividad
      setUser(null);
      console.log('¡Sesión cerrada por inactividad!');
    },  10 * 60 * 1000); // 3 minutos en milisegundos
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

  // Detectar eventos de actividad del usuario
  const handleUserActivity = () => {
    resetTimer();
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('keypress', handleUserActivity);

    return () => {
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keypress', handleUserActivity);
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
