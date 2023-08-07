import React, { useRef, useState } from 'react';

const EditBlogBoilerPlate = (data) => {
    console.log(data);
    const editor = useRef(null);
    const [content, setContent] = useState('');
    const [title, setTitle] = useState('');
    const [isPosted, setIsPosted] = useState(false);

    // --- for checkbox 
    const [checkboxes, setCheckboxes] = useState({
        programming: false,
        mac: false,
        webDevelopment: false,
        dsa: false,
        react: false

    })
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
        </div>
    );
};

export default EditBlogBoilerPlate;