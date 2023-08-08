import React from 'react';
import './BlogCard.css';
import { useContext } from 'react';
import { ModalContext } from '../../../../Utilities/Context Api/ModalContext';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../Utilities/firebase.init';
import { useNavigate, useNavigation } from 'react-router-dom';
import { successMsg } from '../../../../Utilities/Popup Msg/successMsg';
import { errorMsg } from '../../../../Utilities/Popup Msg/errorMsg';

const BlogCard = ({ index }) => {
    const { _id, content, category, title } = index;

    // --- checking if the user is admin
    const [user, loading, error] = useAuthState(auth);
    // console.log(user?.email);

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

    // --- go to the 'Edit Blog' page for a specific blog
    const navigation = useNavigate();
    const gotoEdit = (id) => {
        navigation(`/blogs/editBlogs/${_id}`)
    }

    // --- delete a Blog 
    const deleteBlog = (id) => {
        fetch(`https://server-for-my-portfolio.vercel.app/blogs/delete/${id}`,{
            method : 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount>0){
                successMsg('Deleted Successfully !');
            }
        })
        .catch(err => {
            errorMsg(err.message);
        })
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
                    <button onClick={()=>gotoEdit(_id)}>Edit</button>
                    <button onClick={()=>deleteBlog(_id)}>Delete</button>
                </div>}
            </div>
            <div className="blog-style"></div>

        </div>
    );
};

export default BlogCard;