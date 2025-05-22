import React from 'react';
import { useContext } from 'react';

const PrivateRoute = ({children}) => {
const {user} = useContext(AuthContext)
}; 

export default PrivateRoute;