import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import {Navigate} from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user, loading, setLoading } = useContext(AuthContext);

    if(load)

    if(user && user?.email){
        return children ;
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;