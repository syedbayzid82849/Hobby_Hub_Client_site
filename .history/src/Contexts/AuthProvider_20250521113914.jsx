import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../firebase.init';



const AuthProvider = ({ children }) => {

    // register with email pass
    const createUser = (email, Password) => {
        return createUserWithEmailAndPassword(auth, email, Password)
    };

    // register with google
    const provider = new GoogleAuthProvider();
    const createUserWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    // register with google
    const provider = new GoogleAuthProvider();
    const UserWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }


    const userInfo = {
        createUser,
        createUserWithGoogle
    }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;