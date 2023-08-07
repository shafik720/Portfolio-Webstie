import React, { useRef, useState } from 'react';
import { errorMsg } from '../../../Utilities/Popup Msg/errorMsg';
import JoditEditor from 'jodit-react';

const EditBlogBoilerPlate = ({data}) => {
    console.log(data);
    const editor = useRef(null);
    const [content, setContent] = useState(data.content);
    const [title, setTitle] = useState(data.title);
    const [isPosted, setIsPosted] = useState(false);

    // --- for checkbox 
    const [checkboxes, setCheckboxes] = useState({
        programming: data.category.find(index => index == 'programming'),
        mac: data.category.find(index => index == 'mac'),
        webDevelopment: data.category.find(index => index == 'webDevelopment'),
        dsa: data.category.find(index => index == 'dsa'),
        react: data.category.find(index => index == 'react')

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
                        body: JSON.stringify({ content, category: selectedCheckboxes, title, createdAt : convertedDate })
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
                <input type="text" name="title" id="" value={title} onChange={e => setTitle(e.target.value)} />
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