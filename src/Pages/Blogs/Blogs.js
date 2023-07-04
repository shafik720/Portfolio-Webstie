import JoditEditor from 'jodit-react';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import './Blogs.css';

const Blogs = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [isPosted, setIsPosted] = useState(false);

    const handleSubmit = () =>{
        if(title.length>0){
            fetch('http://localhost:2500/postBlog',{
                method : 'POST',
                headers : {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify({content, catagory : 'mac'})
            })
            .then(res => res.json())
            .then(result => {
                if(result.insertedId){
                    setIsPosted(true);
                }
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
    return (
        <div>
            <div className="writting-div">
                <div className="blog-title">
                    <p>Blog Title</p>
                    <input type="text" name="title" id="" onChange={e => setTitle(e.target.value) } />
                </div>
                <p>Blog Details</p>
                <JoditEditor
                    ref={editor}
                    value={content}
                    tabIndex={1} // tabIndex of textarea
                    onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                    onChange={newContent => { }}
                />
                <button onClick={handleSubmit} className={`post-button ${isPosted && 'posted'}`} disabled={isPosted}>{isPosted ? 'Posted' : 'Post Blog'}</button>
            </div>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>

        </div>
    );
};

export default Blogs;