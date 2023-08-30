import JoditEditor from 'jodit-react';
import React, { useRef, useState } from 'react';
import './Blogs.css';
import { errorMsg } from '../../Utilities/Popup Msg/errorMsg';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Utilities/firebase.init';
import { useNavigate } from 'react-router-dom';

const Blogs = () => {
    const editor = useRef(null);

    const [content, setContent] = useState('');
    const [banglaContent, setBanglaContent] = useState('');

    const [title, setTitle] = useState('');
    const [banglaTitle, setBanglaTitle] = useState('');

    const [isPosted, setIsPosted] = useState(false);

    // --- for checkbox 
    const [checkboxes, setCheckboxes] = useState({
        programming: false,
        mac: false,
        webDevelopment: false,
        dsa: false,
        react: false

    })

    const handleCheckBoxChange = event => {
        const { name, checked } = event.target;
        setCheckboxes({ ...checkboxes, [name]: checked });
    }

    const handleSubmit = () => {
        const selectedCheckboxes = Object.entries(checkboxes).filter(([name, isChecked]) => isChecked).map(([name]) => name);

        const now = new Date();
        const convertedDate = now.toISOString();
        // console.log(moment(convertedDate).format('DD MMM YYYY'));

        // Perform any necessary actions with the selected checkboxes array
        if (title.length > 0) {
            // console.log(selectedCheckboxes.length);
            if (selectedCheckboxes.length <= 0) {
                errorMsg('You must select a Catagory !');
            } else {
                let confirm = window.confirm('Post a new Blog ? ');
                if (confirm) {
                    fetch('https://server-for-my-portfolio.vercel.app/postBlog', {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify({ content, banglaContent, category: selectedCheckboxes, title, banglaTitle, createdAt : convertedDate })
                    })
                        .then(res => res.json())
                        .then(result => {
                            if (result.insertedId) {
                                setIsPosted(true);
                            }
                        })
                        .catch(error => {
                            console.log(error);
                            errorMsg('There was an server error posting the blog');
                        })
                }
            }
        } else {
            errorMsg('You must enter a title');
        }
    }

    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    // const[signOut] = useSignOut(auth);
    // const handleSignout = () => {
    //     signOut();
    // }
    // const handleAddBlogs = () => {
    //     navigate('/postBlogs');
    // }

    let content2 = null;
    if (loading && !error) {
        content2 = <p>Checking Authentication...</p>
    }
    if (!loading && error) {
        content2 = <p>There was an error loading the page</p>
    }
    if (user?.email === 'shafikrasel5@gmail.com') {
        content2 = <div className="writting-div">

            {/* --- English Title --- */}
            <div className="blog-title">
                <p>English Title</p>
                <input type="text" name="title" id="" onChange={e => setTitle(e.target.value)} />
            </div>

            {/* --- Bangla Title --- */}
            <div className="blog-title">
                <p>Bangla Title</p>
                <input type="text" name="title" id="" onChange={e => setBanglaTitle(e.target.value)} />
            </div>

            {/* ------------ Category Section Starts ------------- */}
            <div className="blog-category">
                <p>Catagory :</p>
                <span>
                    <input
                        type="checkbox"
                        name="programming"
                        id="programming"
                        value="Programming"
                        checked={checkboxes.programming}
                        onChange={handleCheckBoxChange}
                    />
                    <label htmlFor="programming">Programming</label>
                </span>
                <span>
                    <input
                        type="checkbox"
                        name="mac"
                        id="mac"
                        value="mac"
                        checked={checkboxes.mac}
                        onChange={handleCheckBoxChange}
                    />
                    <label htmlFor="mac">Mac</label>
                </span>
                <span>
                    <input
                        type="checkbox"
                        name="webDevelopment"
                        id="webDevelopment"
                        value="webDdevelopment"
                        checked={checkboxes.webDevelopment}
                        onChange={handleCheckBoxChange}
                    />
                    <label htmlFor="web-development">Web development</label>
                </span>
                <span>
                    <input
                        type="checkbox"
                        name="dsa"
                        id="DSA"
                        value="DSA"
                        checked={checkboxes.dsa}
                        onChange={handleCheckBoxChange}
                    />
                    <label htmlFor="DSA">DSA</label>
                </span>
                <span>
                    <input
                        type="checkbox"
                        name="react"
                        id="react"
                        value="react"
                        checked={checkboxes.react}
                        onChange={handleCheckBoxChange}
                    />
                    <label htmlFor="react">React</label>
                </span>
            </div>
            {/* ------------ Category Section Ends ------------- */}


            {/* ------------ English Description ------------- */}
            <div className="blog-details">
                <p>Blog Details : English</p>
                <JoditEditor
                    ref={editor}
                    value={content}
                    tabIndex={1} // tabIndex of textarea
                    onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                    onChange={newContent => { }}
                />
            </div>

            {/* ------------ Bangla Description ------------- */}
            <div className="blog-details">
                <p>Blog Details : Bangla</p>
                <JoditEditor
                    ref={editor}
                    value={content}
                    tabIndex={1} // tabIndex of textarea
                    onBlur={newContent => setBanglaContent(newContent)} // preferred to use only this option to update the content for performance reasons
                    onChange={newContent => { }}
                />
            </div>

            <button onClick={handleSubmit} className={`post-button ${isPosted && 'posted'}`} disabled={isPosted}>{isPosted ? 'Posted' : 'Post Blog'}</button>
        </div>
    } else {
        content2 = <p>You are not authorized to see this</p>
    }


    return (
        <div>
            {content2}
            <div dangerouslySetInnerHTML={{ __html: content }}></div>

        </div>
    );
};

export default Blogs;