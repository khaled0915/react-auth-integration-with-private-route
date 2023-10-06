import { createContext, useEffect, useState } from "react";

import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import PropTypes from 'prop-types';
import auth from "../Firebase/firebase.config";

 export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null);


    // for registration
    const createUser = (email , password) => {
        return createUserWithEmailAndPassword (auth , email , password);
    }

    // for login 

    const signInUser = (email , password)=>{
        return signInWithEmailAndPassword(auth , email , password);
    }

    // for signOut 

    const logOut = () =>{
       return signOut(auth);
    }


    // observe auth state change 

    useEffect( () =>{

     const unSubscribe =    onAuthStateChanged(auth , currentUSer =>{
            setUser(currentUSer);

            console.log('current value of the current user ' , currentUSer)
        });
        return () =>{

            unSubscribe();


        } 

    },[] )



 //  pass the func and state in  the context
    const authInfo = { user , createUser, signInUser , logOut}
    return (
        <AuthContext.Provider value ={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children : PropTypes.node 
}


/**
 * 
 * step ; 
 * 
 * 1. create context and export it
 * 
 * 2. set provider with value
 * 
 * 3. use the auth provider in the main.jsx file 
 * 
 * 4 . access children in the authentication component as children and use it in the midddle of the provider
 */