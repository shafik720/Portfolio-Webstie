import React, { useContext } from 'react';
import { ModalContext } from '../../../Utilities/Context Api/ModalContext';
import TranslationButton from '../../../Utilities/TranslationButton/TranslationButton';
import moment from 'moment';

const SingleBlogDetailsDiv = (index) => {
    const data = index.index;
    const { content, banglaContent, title, banglaTitle, createdAt, titleThumb } = data;
    const timeOfCreation = moment(createdAt).format('DD MMM YYYY') ;


    // --- checking if the bangla version is enabled or not
    const { bangla } = useContext(ModalContext);
    
    return (
        <div className='single-blog-details-div'>
            <div className="blog-title">
                <TranslationButton></TranslationButton>
                <h1>{!bangla ? title : banglaTitle}</h1>
            </div>

            <div className="blog-img">
                {/* <img src={titleThumb} alt="" /> */}
            </div>
            {!bangla ? <div dangerouslySetInnerHTML={{ __html: content }}></div> : <div dangerouslySetInnerHTML={{ __html: banglaContent }}></div>}
            
            
            <div className="authority">
                <hr />
                <p>Written By : <img src="https://i.ibb.co/J5bQFs4/1668538578655.png" alt="" />  Shafiqul Hasan Rasel</p>
                <p>Created at : <span>{timeOfCreation} </span>  </p>
            </div>
        </div>
    );
};

export default SingleBlogDetailsDiv;