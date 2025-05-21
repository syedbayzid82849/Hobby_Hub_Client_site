import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {
    const userInfo = {

    }
    return (
        <AuthContext va>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;