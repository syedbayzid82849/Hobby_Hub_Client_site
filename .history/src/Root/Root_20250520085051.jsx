import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/'


const Root = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar
            <div className="flex-grow">
                <Outlet></Outlet>
            </div>
            <footer
        </div>
    );
};


export default Root;