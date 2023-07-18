import React, { useEffect, useState } from 'react';
import './DisplayBlogs.css';
import axios from 'axios';
import BlogCard from './BlogCard/BlogCard';

const DisplayBlogs = () => {
    const[data, setData] = useState([]);

    const response = async() => {
        const res =  await axios.get('http://localhost:2500/getAllBlogs');
        if(res.data.length>0){
            setData(res.data);
        }
    };
    useEffect(()=>{
        response();
    },[])
    console.log(data);
    const now = new Date();
    const convertedDate = now.toISOString();
    console.log(convertedDate);
    return (
        <div className='blog-div'>
            {/* <p>Total Blog Found : {data.length}</p> */}
            {data.map(index=><BlogCard index={index} key={index._id}></BlogCard>)}
        </div>
    );
};

export default DisplayBlogs;