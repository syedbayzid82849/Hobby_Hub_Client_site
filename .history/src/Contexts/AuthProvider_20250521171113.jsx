import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth } from '../firebase.init';



const AuthProvider = ({ children }) => {
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // user true or false
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    // register with email pass
    const createUser = (email, Password) => {
        return createUserWithEmailAndPassword(auth, email, Password)
    };

    // register with google
    const createUserWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }

    // log in with email and pass
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
        loginUserWithGoogle,
        loginUser,
        user, 
        
    }


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;