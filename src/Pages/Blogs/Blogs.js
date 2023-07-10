import JoditEditor from 'jodit-react';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import './Blogs.css';
import { errorMsg } from '../../Utilities/Popup Msg/errorMsg';

const Blogs = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [isPosted, setIsPosted] = useState(false);

    // --- for checkbox 
    const [checkboxes, setCheckboxes] = useState({
        programming: false,
        mac: false,
    })

    const handleCheckBoxChange = event => {
        const { name, checked } = event.target;
        setCheckboxes({ ...checkboxes, [name]: checked });
    }

    const handleSubmit = () => {
        const selectedCheckboxes = Object.entries(checkboxes).filter(([name, isChecked]) => isChecked).map(([name]) => name);

        // Perform any necessary actions with the selected checkboxes array
        if (title.length > 0) {
            if (selectedCheckboxes.length < 1) {
                errorMsg('You must select a Catagory !');
            } else {
                let confirm = window.confirm('Post a new Blog ? ');
                if (confirm) {
                    fetch('http://localhost:2500/postBlog', {
                        method: 'POST',
                        headers: {
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify({ content, catagory: 'mac' })
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



    return (
        <div>
            <div className="writting-div">
                <div className="blog-title">
                    <p>Blog Title</p>
                    <input type="text" name="title" id="" onChange={e => setTitle(e.target.value)} />
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
                            name="programming"
                            id="web-development"
                            value="web-development"
                        />
                        <label htmlFor="web-development">Web development</label>
                    </span>
                    <span>
                        <input
                            type="checkbox"
                            name="programming"
                            id="DSA"
                            value="DSA"
                        />
                        <label htmlFor="DSA">DSA</label>
                    </span>
                    <span>
                        <input
                            type="checkbox"
                            name="programming"
                            id="react"
                            value="react"
                        />
                        <label htmlFor="react">React</label>
                    </span>
                </div>
                {/* ------------ Category Section Ends ------------- */}

                <div className="blog-details">
                    <p>Blog Details</p>
                    <JoditEditor
                        ref={editor}
                        value={content}
                        tabIndex={1} // tabIndex of textarea
                        onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                        onChange={newContent => { }}
                    />
                </div>
                <button onClick={handleSubmit} className={`post-button ${isPosted && 'posted'}`} disabled={isPosted}>{isPosted ? 'Posted' : 'Post Blog'}</button>
            </div>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>

        </div>
    );
};

export default Blogs;