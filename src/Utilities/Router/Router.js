import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Blogs from '../../Pages/Blogs/Blogs';
import Login from '../../Components/Login/Login';

const Router = createBrowserRouter([
    {
        path : '/',
        element : <Home></Home>
    },
    {
        path : '/postBlogs',
        element : <Blogs></Blogs>
    },
    {
        path : '/adminLogin',
        element : <Login></Login>
    }
])
export default Router;