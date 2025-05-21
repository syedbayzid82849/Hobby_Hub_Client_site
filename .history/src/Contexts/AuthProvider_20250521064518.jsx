import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase.init';


const AuthProvider = ({children}) => {
    const userInfo = {
        user: 'connected'
    },
    const createUser = (email, Password) =>{
        return createUserWithEmailAndPassword(auth, email, Password)
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;