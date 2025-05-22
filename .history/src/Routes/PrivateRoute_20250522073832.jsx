import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import {Navi}

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    if(user && user?.email){
        return children ;
    }
    return <Navigate></Navigate>
};

export default PrivateRoute;