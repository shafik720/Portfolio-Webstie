import React from 'react';
import './BlogCard.css';

const BlogCard = () => {
    return (
        <div className='blog-card'>
            <div className="blog-title">
                <h4>Title Here</h4>
            </div>
            <div className="blog-details">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, perspiciatis. Quos placeat, laboriosam, ducimus nostrum fuga est modi rerum eligendi debitis provident 
            </div>
            <div className="blog-footer">
                <p>12 January 2023</p>
                <button>Read More</button>
            </div>
        </div>
    );
};

export default BlogCard;