import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer'

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="min-h-screen flex flex-col" >
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
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
//         <div >
//             <Navbar
//             <div >
//                 <Outlet></Outlet>
//             </div>
//             <Footer></Footer>
//         </div>
//     );
// };


export default Root;