import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register"
import Companies from "../Pages/companies/Companies";
import ErorrPage from "../Components/ErorrPage/ErorrPage";
import Profile from "../Pages/Profile/Profile";
import Blogs from "../Components/Blogs/Blogs";

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
                },
                {
                    path: '/companies',
                    loader: () => fetch('/companies.json'),
                    element: <Companies></Companies>
                },
                {
                    path: '/profile',
                    element: <Profile></Profile>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/register',
                    element: <Register></Register>
                },
                {
                    path: '/blogs',
                    element: <Blogs></Blogs>
                }
                
            ]
        }
    ]
);

export default router;