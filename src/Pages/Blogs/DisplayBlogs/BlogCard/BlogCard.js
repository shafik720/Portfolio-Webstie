import React from 'react';
import './BlogCard.css';
import { useContext } from 'react';
import { ModalContext } from '../../../../Utilities/Context Api/ModalContext';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../Utilities/firebase.init';

const BlogCard = ({ index }) => {
    const { _id, content, category, title } = index;

    // --- checking if the user is admin
    const [user, loading, error] = useAuthState(auth);
    console.log(user?.email);

    const tempContent = document.createElement('div');
    tempContent.innerHTML = content;
    const textFromContent = tempContent.textContent;

    const shortDesc = textFromContent.split("").slice(0, 150).join("");
    // console.log(content);

    // --- using context to open popup display or modal 
    const { openModal } = useContext(ModalContext);
    const handleModal = () => {
        openModal({ desc: content, title });
    }
    return ( 
        loading ? <p>Loading....</p> :
        <div className='blog-card'>
            <div className="blog-title">
                <h5>{title}</h5>
            </div>
            <div className="blog-details">
                <p>{shortDesc}  . . . . .
                    <button onClick={handleModal}>Read More</button></p>
            </div>
            <div className="blog-footer">
                <p>12 January 2023</p>
                {user?.email == 'shafikrasel5@gmail.com' && <div className="modify-button">
                    <button>Edit</button>
                    <button>Delete</button>
                </div>}
            </div>
            <div className="blog-style"></div>

        </div>
    );
};

export default BlogCard;