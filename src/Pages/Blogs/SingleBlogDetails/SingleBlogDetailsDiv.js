import React, { useContext } from 'react';
import { ModalContext } from '../../../Utilities/Context Api/ModalContext';
import TranslationButton from '../../../Utilities/TranslationButton/TranslationButton';

const SingleBlogDetailsDiv = (index) => {
    const data = index.index;
    const { content, banglaContent, title, banglaTitle, createdAt, titleThumb } = data;


    // --- checking if the bangla version is enabled or not
    const { bangla } = useContext(ModalContext);
    console.log(content);
    return (
        <div className='single-blog-details-div'>
            <div className="blog-title">
                <TranslationButton></TranslationButton>
                <h1>{!bangla ? title : banglaTitle}</h1>
            </div>

            <div className="blog-img">
                <img src={titleThumb} alt="" />
            </div>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
    );
};

export default SingleBlogDetailsDiv;