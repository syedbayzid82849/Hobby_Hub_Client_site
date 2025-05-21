import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {
    const userInfo = {

    }
    return (
        <AuthContext v>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;