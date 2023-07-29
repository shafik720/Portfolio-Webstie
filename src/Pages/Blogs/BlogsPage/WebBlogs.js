import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const WebBlogs = () => {
    const params = useParams();
    // const {category as paramCategory} = params ; 

    const [data, setData] = useState([]);

    const response = async () => {
        const res = await axios.get('https://server-for-my-portfolio.vercel.app/getAllBlogs');
        if (res.data.length > 0) {
            const dummy = [];
            res.data.map(index => {
                const obtainedData = index.category.find(index2 => index2 == params.category)
                if (obtainedData) {
                    // setData(dummy.push(index))
                    dummy.push(index);
                    setData(dummy);
                }
            });
        } else {
            setData(false);
        }
    };

    useEffect(() => {
        response();
    }, [])
    console.log(data);
    return (
        <div>
            <h2>Show web blogs here</h2>
        </div>
    );
};

export default WebBlogs;