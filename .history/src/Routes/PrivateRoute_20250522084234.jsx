import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import {Navigate} from 'react-router';
import Loading from '../'

const PrivateRoute = ({ children }) => {
    const { user, loading, setLoading } = useContext(AuthContext);

    if(loading){
        return 
    }

    if(user && user?.email){
        return children ;
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;