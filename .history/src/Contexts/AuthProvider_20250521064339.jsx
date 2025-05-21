import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from "firebase/auth";


const AuthProvider = ({children}) => {
    const userInfo = {
        user: 'connected'
    },
    const createUser = () =>{
        return createUserWithEmailAndPassword(Auth)
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;