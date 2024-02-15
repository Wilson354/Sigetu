
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    projectId: process.env.REACT_APP_PROYECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID,
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