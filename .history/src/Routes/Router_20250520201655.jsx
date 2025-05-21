import React from 'react';
import {createBrowserRouter} from "react-router";
import Root from "../Root/Root";
import Home from '../Pages/Home/Home';
import Register from '../Pages/Register/Register';

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Root></Root>,
            children: [
                {
                    index: true,
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/register', 
                    element: <Register
                }
            ]
        }
    ]
);

export default router;