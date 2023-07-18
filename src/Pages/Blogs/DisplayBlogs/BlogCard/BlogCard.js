import React from 'react';
import './BlogCard.css';

const BlogCard = () => {
    return (
        <div className='blog-card'>
            <div className="blog-title">
                <h2>Title Here</h2>
            </div>
            <div className="blog-details">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, perspiciatis. Quos placeat, laboriosam, ducimus nostrum fuga est modi rerum eligendi debitis provident 
            </div>
            <div className="blog-footer">
                <h2>footer here</h2>
            </div>
        </div>
    );
};

export default BlogCard;