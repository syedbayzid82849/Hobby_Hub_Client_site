import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import Root from "../Root/Root";

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
                    loader: () => fetch('/companies.json'),
                    element: <Home></Home>
                }
            ]
        }
    ]
);

export default router;