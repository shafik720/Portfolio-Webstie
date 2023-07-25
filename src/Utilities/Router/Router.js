import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Blogs from '../../Pages/Blogs/Blogs';
import Login from '../../Components/Login/Login';
import Dashboard from '../../Components/Dashboard/Dashboard';
import DisplayBlogs from '../../Pages/Blogs/DisplayBlogs/DisplayBlogs';

const Router = createBrowserRouter([
    {
        path : '/',
        element : <Home></Home>
    },
    {
        path : 'blogs/postBlogs',
        element : <Blogs></Blogs>
    },
    {
        path : 'blogs/allBlogs',
        element : <DisplayBlogs></DisplayBlogs>
    },
    {
        path : '/adminDashboard',
        element : <Dashboard></Dashboard>
    },
    {
        path : '/adminLogin',
        element : <Login></Login>
    }
])
export default Router;