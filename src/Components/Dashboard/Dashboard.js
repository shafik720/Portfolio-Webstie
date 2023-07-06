import React from 'react';
import './Dashboard.css';
import auth from '../../Utilities/firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';

const Dashboard = () => {
    const [user, loading, error] = useAuthState(auth);
    console.log(user);

    let content = null;
    if (loading && !error) {
        content = <p>Checking Authentication...</p>
    }
    if (!loading && error) {
        content = <p>There was an error loading the page</p>
    }
    if (user?.email === 'shafikrasel5@gmail.com') {
        content = <div className='dashboard-div'>
            <button>View Blogs</button>
            <button>Add Blogs</button>
            <button>Logout</button>
        </div>
    } else {
        content = <p>You are not authorized to see this</p>

    }
    return (
        <div className="">
            {content}
        </div>
    );
};

export default Dashboard;