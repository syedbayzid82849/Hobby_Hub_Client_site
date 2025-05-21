import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase.init';
import { GoogleAuthProvider } from "firebase/auth";



const AuthProvider = ({ children }) => {

    // register with email pass
    const createUser = (email, Password) => {
        return createUserWithEmailAndPassword(auth, email, Password)
    };

    // register with google
    const provider = new GoogleAuthProvider();
    const createUserWit


    const userInfo = {
        createUser,

    }


    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;