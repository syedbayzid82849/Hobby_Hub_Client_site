import React from 'react';
import {
    createBrowserRouter,
} from "react-router";
import Root from "../Root/Root";
import Home from '../Pages/Home/Home';

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Root></Root>,
            errorElement: <ErorrPage></ErorrPage>,
            children: [
                {
                    index: true,
                    path: '/',
                    element: <Home></Home>
                }
            ]
        }
    ]
);

export default router;