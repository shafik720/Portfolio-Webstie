import React, { useState } from 'react';
import './DisplayBlogs.css';
import axios from 'axios';

const DisplayBlogs = () => {
    const[data, setData] = useState([]);

    const response = async() => {
        const res =  await axios.get('http://localhost:2500/getAllBlogs');
        if(res.data.length>0){
            setData(res.data);
        }
    };
    response();
    console.log(data);
    return (
        <div>
            <p>Total Blog Found : {data.length}</p>
        </div>
    );
};

export default DisplayBlogs;