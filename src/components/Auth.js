import { useState } from "react";
import {auth, googleProvider} from "../congif/firebase";
import {createUserWithEmailAndPassword, signInWithPopup,signOut } from "firebase/auth";

function Auth(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    function handleUser(e){
        return(
            setEmail(e.target.value)
        );
    }

    function handlePassword(e){
        return(
            setPassword(e.target.value)
        );
    }

    async function signIn(){
        try{
        await createUserWithEmailAndPassword(auth, email, password);
        } catch(err){
            console.error(err);
        }
    };
    
    async function signInWithGoogle(){
        try{
        await signInWithPopup(auth, googleProvider);
        } catch(err){
            console.error(err);
        }
    };

    async function logout(){
        try{
        await signOut(auth);
        } catch(err){
            console.error(err);
        }
    };
    return(
        <div>
            <input placeholder="username" onChange={handleUser}></input>
            <input placeholder="password" onChange={handlePassword}></input>
            <button onClick={signIn}>Sign In</button>
            <button onClick={signInWithGoogle}>
            Sign in with google
            </button>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default Auth;