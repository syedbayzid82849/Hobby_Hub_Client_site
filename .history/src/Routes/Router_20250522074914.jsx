import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from '../Pages/Home/Home';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import Profile from '../Pages/Profile/Profile';
import CreateGroup from '../Pages/createGroup/createGroup';
import MyGroup from '../pages/myGroup/myGroup'
import PrivateRoute from './PrivateRoute';
import AllGroups from '../pa'

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
                    element: <Register></Register>
                },
                {
                    path: '/login',
                    element: <Login></Login>
                },
                {
                    path: '/profile',
                    element: <Profile></Profile>
                },
                {
                    path: '/all-groups', 
                    element: <AllGroups
                },
                {
                    path: '/create-group',
                    element: <CreateGroup></CreateGroup>
                },
                {
                    path: '/my-group',
                    element:
                        <PrivateRoute>
                            <MyGroup></MyGroup>
                        </PrivateRoute>
                }
            ]
        }
    ]
);

export default router;