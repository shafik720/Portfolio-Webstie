import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditBlog.css';
import EditBlogBoilerPlate from './EditBlogBoilerPlate';

const EditBlog = () => {
    const params = useParams();

    const [content, setContent] = useState('');
    const [error, setError] = useState(null);

    // --- Going Back To Previous Page
    const history = useNavigate();
    const goBack = () => {
        history(-1);
    }

    // --- getting data for the Blogs to be edited
    useEffect(()=>{
        fetch(`http://localhost:2500/blogs/editBlogs/${params.id}`)
        .then(res => res.json())
        .then(data => setContent(data))
        .catch(error => setError(error.message))
    },[])
    return (
        <div className='central-div'>
            <h2>Edit Your Blog Here ... </h2>
            <button onClick={goBack}>Go Back</button>
            {content === '' ? <p>Loading...</p> : <EditBlogBoilerPlate data={content}></EditBlogBoilerPlate>}
        </div>
    );
};

export default EditBlog;