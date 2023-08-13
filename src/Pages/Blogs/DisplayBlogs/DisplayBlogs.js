import React, { useEffect, useState } from 'react';
import './DisplayBlogs.css';
import axios from 'axios';
import BlogCard from './BlogCard/BlogCard';
import searchImg from '../../../assets/img/search.png'

const DisplayBlogs = () => {
    const [data, setData] = useState([]);


    // --- search functionality
    const [search, setSearch] = useState('');
    const [searchData, setSearchData] = useState([]);
    useEffect(() => {
        if (search !== '') {
            const result = [];
            data?.map(index => {
                if (index.title.toLowerCase().includes(search.toLowerCase())) {
                    // console.log('Got ya');
                    result.push(index);
                } else {
                    // console.log('Not found');
                }
            })
            setSearchData(result);
        }
    }, [search])

    const response = async () => {
        const res = await axios.get('https://server-for-my-portfolio.vercel.app/getAllBlogs');
        if (res.data.length > 0) {
            setData(res.data);
        } else {
            setData(false);
        }
    };

    useEffect(() => {
        response();
    }, [])
    // console.log('all data: ', data);

    return (
        <div className="blog-div-parent">
            <h1>All Blogs</h1>
            <hr />

            {/* --- search div --- */}
            <div className="search-div">
                <div className="search-img">
                    <img src={searchImg} alt="" />
                </div>
                <input className='search-input' type="text" name="" id="" onKeyUp={(e) => setSearch(e.target.value)} placeholder='Search Here' />
                {/* <button>Search</button> */}
            </div>

            <div className='blog-div'>
                {/* <p>Total Blog Found : {data.length}</p> */}
                {search === '' ? data?.map(index => <BlogCard index={index} key={index._id}></BlogCard>) : searchData?.map(index => <BlogCard index={index} key={index._id}></BlogCard>)}
                {data.length === 0 && <p>Loading...</p>}
                {!data && <p>No Blogs Found !</p>}
            </div>
        </div>
    );
};

export default DisplayBlogs;






