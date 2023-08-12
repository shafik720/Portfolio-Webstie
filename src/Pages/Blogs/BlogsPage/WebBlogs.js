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
    const [search, setSearch] = useState('');
    const [searchData, setSearchData] = useState([]);

    // --- searching 
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

    useEffect(() => {
        // --- fetching data from server
        fetch(`https://server-for-my-portfolio.vercel.app/blogs/${params.category}`)
            .then(res => res.json())
            .then(data => {
                if (data.length > 0) {
                    setData(data);
                } else if (data.length == 0) {
                    setData(null);
                }
            })

        // --- setting category name from params
        if (params.category === 'dsa') {
            setCatname('DSA')
        }
        else if (params.category === 'webDevelopment') {
            setCatname('Web Development')
        }
        else if (params.category === 'react') {
            setCatname('React')
        }
        else if (params.category === 'mac') {
            setCatname('Mac')
        }
        else {
            setCatname('');
        }
    }, [params.category, params])

    // console.log(params.category);
    return (
        <div className="blog-div-parent">
            <h1><span className='category-special-word'>{catname} </span> related Blogs </h1>
            <hr />
            <div className="search-div">
                <input type="text" name="" id="" onKeyUp={(e) => setSearch(e.target.value)} />
                <button>Search</button>
            </div>
            <div className='blog-div'>
                {/* <p>Total Blog Found : {data.length}</p> */}
                {search === '' ? data?.map(index => <BlogCard index={index} key={index._id}></BlogCard>) : searchData?.map(index => <BlogCard index={index} key={index._id}></BlogCard>)}
                {data?.length === 0 && <p>Loading...</p>}
            </div>
            {!data && <p className='not-found'>No Blogs Found ! <br />Please check back later :) </p>}
        </div>
    );
};

export default WebBlogs;



