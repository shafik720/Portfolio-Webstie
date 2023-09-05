import React, { useContext } from 'react';
import { ModalContext } from '../../../Utilities/Context Api/ModalContext';
import TranslationButton from '../../../Utilities/TranslationButton/TranslationButton';
import moment from 'moment';

const SingleBlogDetailsDiv = (index) => {
    const data = index.index;
    const { content, banglaContent, title, banglaTitle, createdAt, titleThumb } = data;
    const timeOfCreation = moment(createdAt).format('DD MMM YYYY');


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
            {!bangla ? <div className='single-blog-details-content' dangerouslySetInnerHTML={{ __html: content }}></div> : <div className='single-blog-details-content'  dangerouslySetInnerHTML={{ __html: banglaContent }}></div>}

            {/* --- Footer Panel of single blog --- */}
            <hr />
            <div className="authority">
                <div className="authority-subDiv author">
                    <p>Written By : </p>
                    <div className="author-img-parent">
                        <div className='author-img'>
                            <img src="https://i.ibb.co/J5bQFs4/1668538578655.png" alt="" />
                        </div>
                        <p>Shafiqul Hasan Rasel</p>
                    </div>
                </div>
                <div className=" authority-subDiv creation-date">
                    <p>Created at : </p>
                    <p>{timeOfCreation} </p>
                </div>
            </div>
        </div>
    );
};

export default SingleBlogDetailsDiv;