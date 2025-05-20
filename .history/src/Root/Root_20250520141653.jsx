import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className="min-h-screen flex flex-col" >
            <Navbar></Navbar>
            <div className="flex-grow">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;
