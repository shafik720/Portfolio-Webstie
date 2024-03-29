import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../../Pages/Home/Home';
import Blogs from '../../Pages/Blogs/Blogs';
import Login from '../../Components/Login/Login';
import Dashboard from '../../Components/Dashboard/Dashboard';
import DisplayBlogs from '../../Pages/Blogs/DisplayBlogs/DisplayBlogs';
import Main from '../../Main';
import WebBlogs from '../../Pages/Blogs/BlogsPage/WebBlogs';
import ProgrammingBlogs from '../../Pages/Blogs/BlogsPage/ProgrammingBlogs';
import EditBlog from '../../Pages/Blogs/EditBlog/EditBlog';
import SingleBlogDetails from '../../Pages/Blogs/SingleBlogDetails/SingleBlogDetails';

const Router = createBrowserRouter([
    {
        path : '/',
        element : <Main></Main>,
        children : [
            {
                path : '/',
                element : <Home></Home>
            },
            {
                path : '/adminDashboard',
                element : <Dashboard></Dashboard>
            },
            {
                path : '/adminLogin',
                element : <Login></Login>
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
                path : 'blogs/programmingBlogs',
                element : <ProgrammingBlogs></ProgrammingBlogs>
            },
            {
                path : 'blogs/editBlogs/:id',
                element : <EditBlog></EditBlog>
            },
            {
                path : 'blogs/singleBlogDetails/:id',
                element : <SingleBlogDetails></SingleBlogDetails>
            },
            {
                path : 'blogs/WebBlogs/:category',
                element : <WebBlogs></WebBlogs>
            }
        ]
    }
])
export default Router;