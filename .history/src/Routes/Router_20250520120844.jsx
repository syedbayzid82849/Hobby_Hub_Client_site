import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import Root from "../Root/Root";

const router = createBrowserRouter (
    [
        {
            path: '/',
            element: <Root></Root>,
            errorElement: <ErorrPage></ErorrPage>,
            children: [
                index
            ]
        }
    ]
);

export default router;