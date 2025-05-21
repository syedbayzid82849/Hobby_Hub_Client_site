import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase.init';


const AuthProvider = ({ children }) => {

    // register with email pass
    const createUser = (email, Password) => {
        return createUserWithEmailAndPassword(auth, email, Password)
    };

    register

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