import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/'

const Root = () => {
    return (
        <div className="min-h-screen flex flex-col" >
            <Navbar></Navbar>
            <div className="flex-grow">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;
