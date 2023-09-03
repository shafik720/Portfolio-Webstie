import React, { useEffect, useState } from 'react';
import './SingleBlogDetails.css';
import { useParams } from 'react-router-dom';

const SingleBlogDetails = () => {
    const params = useParams();
    const [content, setContent] = useState('');

    // --- getting data for the Blogs with id
    useEffect(() => {
        fetch(`https://server-for-my-portfolio.vercel.app/blogs/editBlogs/${params.id}`)
            .then(res => res.json())
            .then(data => setContent(data))
            // .catch(error => setError(error.message))
    }, [])
    console.log(content);
    return (
        <div>
            <h2>Single Blog Details</h2>
        </div>
    );
};

export default SingleBlogDetails;