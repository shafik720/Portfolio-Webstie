import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BlogCard from '../DisplayBlogs/BlogCard/BlogCard';
import './WebBlogs.css';

const WebBlogs = () => {
    const params = useParams();
    // const {category as paramCategory} = params ;

    const [data, setData] = useState([]);
    const [catname, setCatname] = useState('');

    useEffect(() => {
        // --- fetching data from server
        fetch(`https://server-for-my-portfolio.vercel.app/blogs/${params.category}`)
            .then(res => res.json())
            .then(data => setData(data))

        // --- setting category name from params
        if(params.category === 'dsa'){
            setCatname('DSA')
        }
        else if(params.category === 'webDevelopment'){
            setCatname('Web Development')
        }
        else if(params.category === 'react'){
            setCatname('React')
        }
        else if(params.category === 'mac'){
            setCatname('Mac')
        }
        else{
            setCatname('');
        }

    }, [params.category, params])

    // console.log(params.category);
    return (
        <div className="blog-div-parent">
            <h1><span className='category-special-word'>{catname} </span> related Blogs </h1>
            <hr />
            <div className='blog-div'>
                {/* <p>Total Blog Found : {data.length}</p> */}
                {data.map(index => <BlogCard index={index} key={index._id}></BlogCard>)}
                {data.length === 0 && <p>Loading...</p>}
                {!data && <p>No Blogs Found !</p>}
            </div>
        </div>
    );
};

export default WebBlogs;



