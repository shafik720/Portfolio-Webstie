import React from 'react';
import './BlogCard.css';

const BlogCard = ({index}) => {
    const {_id, content, category, title} = index;

    const tempContent = document.createElement('div');
    tempContent.innerHTML = content ; 
    const textFromContent = tempContent.textContent;

    const shortDesc = textFromContent.split("").slice(0,150).join("");
    console.log(shortDesc);
    return (
        <div className='blog-card'>
            <div className="blog-title">
                <h4>{title}</h4>
            </div>
            <div className="blog-details">                
            <p>{shortDesc}...</p>
            </div>
            <div className="blog-footer">
                <p>12 January 2023</p>
                <button>Read More</button>
            </div>
            <div className="blog-style"></div>
        </div>
    );
};

export default BlogCard;