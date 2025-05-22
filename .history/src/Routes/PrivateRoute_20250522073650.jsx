import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if(user && user?.email){
        return children
    }
};

export default PrivateRoute;