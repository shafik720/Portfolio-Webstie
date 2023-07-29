import React, { useEffect, useState } from 'react';
import './DisplayBlogs.css';
import axios from 'axios';
import BlogCard from './BlogCard/BlogCard';
import moment from 'moment';

const DisplayBlogs = () => {
    const[data, setData] = useState([]);

    const response = async() => {
        const res =  await axios.get('https://server-for-my-portfolio.vercel.app/getAllBlogs');
        if(res.data.length>0){
            setData(res.data);
        }else{
            setData(false);
        }
    };
    useEffect(()=>{
        response();
    },[])
    // console.log(data);

    return (
        <div className='blog-div'>
            {/* <p>Total Blog Found : {data.length}</p> */}
            {data.map(index=><BlogCard index={index} key={index._id}></BlogCard>)}
            {data.length===0 && <p>Loading...</p>}
            {!data && <p>No Blogs Found !</p>}
        </div>
    );
};

export default DisplayBlogs;