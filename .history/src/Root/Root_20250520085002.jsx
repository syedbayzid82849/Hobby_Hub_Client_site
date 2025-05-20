import React from 'react';
import { Outlet } from 'react-router';


const Root = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <
            <div className="flex-grow">
                <Outlet></Outlet>
            </div>
            
        </div>
    );
};


export default Root;