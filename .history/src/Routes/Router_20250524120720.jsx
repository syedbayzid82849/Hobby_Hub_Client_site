import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from '../Pages/Home/Home';
import Register from '../Pages/Register/Register';
import Login from '../Pages/Login/Login';
import Profile from '../Pages/Profile/Profile';
import CreateGroup from '../Pages/createGroup/createGroup';
import MyGroup from '../Pages/myGroup/myGroup'
import PrivateRoute from './PrivateRoute';
import AllGroups from '../Pages/AllGroups/AllGroups'
import ErrorPage from '../Components/ErrorPage/ErrorPage';
import SingleGroupDetails from '../Pages/AllGroups/SingleGroupDetails';
import UpdateMyGroupInfo from '../Pages/myGroup/UpdateMyGroupInfo';

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
                    loader: () => fetch('https://hobbe-hub-server.vercel.app/all-groups'),
                    element:
                        <PrivateRoute>
                            <AllGroups></AllGroups>
                        </PrivateRoute>
                },
                {
                    path: '/create-group',
                    element:
                        <PrivateRoute>
                            <CreateGroup></CreateGroup>
                        </PrivateRoute>
                },
                {
                    path: '/my-groups',
                    element:
                        <PrivateRoute>
                            <MyGroup></MyGroup>
                        </PrivateRoute>
                },
                {
                    path: '/update-group/:id',
                    loader:({params})=> fetch(`https://hobbe-hub-server.vercel.app/all-groups/${id}`),
                    element: 
                    <PrivateRoute>
                        <UpdateMyGroupInfo></UpdateMyGroupInfo>
                    </PrivateRoute>
                }
                {
                    path: '/all-groups/:id',
                    loader: ({ params }) => fetch(`https://hobbe-hub-server.vercel.app/all-groups/${params.id}`),
                    element:
                        <PrivateRoute>
                            <SingleGroupDetails></SingleGroupDetails>
                        </PrivateRoute>
                },
                {
                    path: '/*',
                    element: <ErrorPage></ErrorPage>
                }
            ]
        }
    ]
);

export default router;