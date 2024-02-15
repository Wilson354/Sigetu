import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import {auth} from "firebase.config";

import {
    Button,
} from "reactstrap";
import { useEffect } from "react";

export default function LoginView() {

    useEffect(()=>{
        onAuthStateChanged(auth, handleUserStateChanged);
    },[]);

    function handleUserStateChanged(user){
        if(user){
            console.log(user.displayName);
        }else{
            console.log("no hay nadie autentificado");
        }
    }

    async function handleOnClick() {
        const googleProvider = new GoogleAuthProvider();
        await singInWithGoogle(googleProvider);
    }

    async function singInWithGoogle(googleProvider){
        try{
            const res = await signInWithPopup(auth, googleProvider);
            console.log(res);
        } catch(error){
            console.error(error);
        }
    }

    return(
        <div>
            <Button onClick={handleOnClick}>Login with google</Button>
        </div>
    );
    
}