import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';

const PrivateRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    console.log(user)
};

export default PrivateRoute;