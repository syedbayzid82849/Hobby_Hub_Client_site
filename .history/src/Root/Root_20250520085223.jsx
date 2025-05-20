import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;

// import React from 'react';
// import { Outlet } from 'react-router';
// import Navbar from '../Components/Navbar/Navbar';
// import Footer from '../Components/Footer/Footer'


// const Root = () => {
//     return (
//         <div className="min-h-screen flex flex-col">
//             <Navbar
//             <div className="flex-grow">
//                 <Outlet></Outlet>
//             </div>
//             <Footer></Footer>
//         </div>
//     );
// };


export default Root;