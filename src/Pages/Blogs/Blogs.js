import JoditEditor from 'jodit-react';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import './Blogs.css';

const Blogs = () => {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    const handleSubmit = () =>{
        console.log(content);
    }
    return (
        <div>
            <div className="writting-div">
                <JoditEditor
                    ref={editor}
                    value={content}
                    tabIndex={1} // tabIndex of textarea
                    onBlur={newContent => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                    onChange={newContent => { }}
                />
                <button onClick={handleSubmit} className='post-button'>Post Blog</button>
            </div>
            <div dangerouslySetInnerHTML={{ __html: content }}></div>

        </div>
    );
};

export default Blogs;