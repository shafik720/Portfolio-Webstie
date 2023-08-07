import React from 'react';
import { useParams, useHistory, useNavigate } from 'react-router-dom';

const EditBlog = () => {
    const params = useParams();
    const history = useNavigate();
    const goBack = () => {
        history(-1);
    }
    return (
        <div>
            <h2>Edit Your Blog Here ... </h2>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
};

export default EditBlog;