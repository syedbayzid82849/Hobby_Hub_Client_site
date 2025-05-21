import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../firebase.init';



const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();

    // register with email pass
    const createUser = (email, Password) => {
        return createUserWithEmailAndPassword(auth, email, Password)
    };

    // register with google
    const createUserWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};


    // login with google
    const loginUserWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }


    const userInfo = {
        createUser,
        createUserWithGoogle,
        loginUserWithGoogle
    }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;