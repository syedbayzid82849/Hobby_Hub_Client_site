import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase.init';


const AuthProvider = ({children}) => {
    const createUser = (email, Password) =>{
        return createUserWithEmailAndPassword(auth, email, Password)
    },
        const userInfo = {
        user: 'connected'
    }


    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;