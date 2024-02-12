
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBQUK7w86qPHYkRh9JaPtIxXXlbJdhb390",
    authDomain: "pruebareact-33214.firebaseapp.com",
    projectId: "pruebareact-33214",
    storageBucket: "pruebareact-33214.appspot.com",
    messagingSenderId: "501121342970",
    appId: "1:501121342970:web:750578d468bd278c98d843"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

const auth = getAuth(app)

auth.onAuthStateChanged(user => {
    if (user) {
      console.log("Usuario conectado:", user);
    } else {
      console.log("Usuario no conectado");
    }
  });
  
  export { auth };