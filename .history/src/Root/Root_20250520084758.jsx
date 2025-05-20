import React from 'react';
import { Outlet } from 'react-router';


const Root = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navb
            <div className="flex-grow">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};


export default Root;