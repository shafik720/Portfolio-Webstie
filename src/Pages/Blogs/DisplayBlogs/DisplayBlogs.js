import React, { useEffect, useState } from 'react';
import './DisplayBlogs.css';
import axios from 'axios';
import BlogCard from './BlogCard/BlogCard';
import moment from 'moment';

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

    return (
        <div className='blog-div'>
            {/* <p>Total Blog Found : {data.length}</p> */}
            {data.map(index=><BlogCard index={index} key={index._id}></BlogCard>)}
        </div>
    );
};

export default DisplayBlogs;