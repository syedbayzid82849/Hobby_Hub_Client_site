import React from 'react';
import { useContext } from 'react';

const PrivateRoute = ({children}) => {
const {user} = useContext(AuthProvider)
}; 

export default PrivateRoute;