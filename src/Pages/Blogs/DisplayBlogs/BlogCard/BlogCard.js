import React from 'react';
import './BlogCard.css';
import { useContext } from 'react';
import { ModalContext } from '../../../../Utilities/Context Api/ModalContext';

const BlogCard = ({index}) => {
    const {_id, content, category, title} = index;

    const tempContent = document.createElement('div');
    tempContent.innerHTML = content ; 
    const textFromContent = tempContent.textContent;

    const shortDesc = textFromContent.split("").slice(0,150).join("");
    // console.log(content);

    // --- using context to open popup display or modal 
    const {openModal} = useContext(ModalContext) ; 
    const handleModal = () => {
        openModal({desc : content, title});
    }
    return (
        <div className='blog-card'>
            <div className="blog-title">
                <h5>{title}</h5>
            </div>
            <div className="blog-details">                
            <p>{shortDesc}...</p>
            </div>
            <div className="blog-footer">
                <p>12 January 2023</p>
                <button onClick={handleModal}>Read More</button>
            </div>
            <div className="blog-style"></div>
        </div>
    );
};

export default BlogCard;