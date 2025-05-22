import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { Navigate } from 'react-router';
import Loading from '../'

const PrivateRoute = ({ children }) => {
    const { user, loading, setLoading } = useContext(AuthContext);

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
            </div>
        )
    }

    if (user && user?.email) {
        return children;
    }
    return <Navigate to="/login"></Navigate>
};

export default PrivateRoute;