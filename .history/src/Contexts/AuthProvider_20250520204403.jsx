import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {
    const userInfo
    return (
        <AuthContext>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;