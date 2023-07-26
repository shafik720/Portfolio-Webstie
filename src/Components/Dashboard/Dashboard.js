import React from 'react';
import './Dashboard.css';
import auth from '../../Utilities/firebase.init';
import { useAuthState, useSignOut } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    const[signOut] = useSignOut(auth);
    const handleSignout = () => {
        signOut();
    }
    const handleAddBlogs = () => {
        navigate('/blogs/postBlogs');
    }
    const handleViewBlogs = () => {
        navigate('/blogs/allBlogs');
    }

    let content = null;
    if (loading && !error) {
        content = <p>Checking Authentication...</p>
    }
    if (!loading && error) {
        content = <p>There was an error loading the page</p>
    }
    if (user?.email === 'shafikrasel5@gmail.com') {
        content = <div className='dashboard-div'>
            <button onClick={handleViewBlogs}>View Blogs</button>
            <button onClick={handleAddBlogs}>Add Blogs</button>
            <button onClick={handleSignout}>Logout</button>
        </div>
    } else {
        content = <p>You are not authorized to see this</p>
    }


    return (
        <div className="dashboard-div">
            {content}
        </div>
    );
};

export default Dashboard;