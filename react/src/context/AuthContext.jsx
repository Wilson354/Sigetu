import React, {useState, useEffect} from "react";
import { createContext, useContext } from "react";
import { auth } from "../firebase.config";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged
} from "firebase/auth";

export const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext);
    if (!context) {
        console.log("error creando auth context");
    }
    return context;
};

export function AuthProvider({ children }) {

    const [user, setUser] = useState("")
    useEffect(()=>{
        const suscribed = onAuthStateChanged(auth, (currentUser)=>{
            if(!currentUser){
                console.log("no hay usuario suscrito")
                setUser("")
            }else{
                setUser(currentUser)
            }
        })
        return () => suscribed()
    }, [])

    /* 
    Registro es una funcion que toma dos argumentos, email y password
    createUserWithEmailAndPassword es una funcion de auth
    */
    const register = async (email, password) => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            console.log(response);
        } catch (error) {
            console.log("Error al registrar:", error.message);
        }
    };
    
    const login = async (email, password) => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);
        } catch (error) {
            console.log("Error al iniciar sesión:", error.message);
        }
    };

    /* 
    Inicio de sesion con google

    const loginWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const response = await signInWithPopup(auth, provider);
            console.log(response);
        } catch (error) {
            console.log("Error al iniciar sesión con Google:", error.message);
        }
    };
    */

    const logout = async () => {
        try {
            const response = await signOut(auth);
            console.log(response);
        } catch (error) {
            console.log("Error al cerrar sesión:", error.message);
        }
    };

    return (
        <authContext.Provider
            value={{
                register,
                login,
                logout,
                user
            }}
        >
            {children}
        </authContext.Provider>
    );
}
