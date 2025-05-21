import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {
    const userInf
    return (
        <AuthContext>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;