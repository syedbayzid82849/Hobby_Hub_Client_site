import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';


const Root = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar
            <div className="flex-grow">
                <Outlet></Outlet>
            </div>
            
            
        </div>
    );
};


export default Root;