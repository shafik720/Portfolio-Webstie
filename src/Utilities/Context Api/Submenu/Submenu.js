import React from 'react';
import catOne from '../../../../src/assets/img/cat 1.png';
import catTwo from '../../../../src/assets/img/cat 2.png';
import { Link, useNavigate } from 'react-router-dom';

const Submenu = () => {
    // const navigation = nav();
    const handleLink = (data) => {

    }
    return (
        <div className="sub-menu">
            <div>
                <img className="sub-menu-front" src={catOne} alt="" />
            </div>
            <div>
                <img className="sub-menu-active" src={catTwo} alt="" />
            </div>
            <div className="sub-menu-items">
                <Link to="/" onClick={() => handleLink('home')}>Home</Link>
                <Link to="/blogs/allBlogs">Blogs</Link>
            </div>
            <div className='horizontal' />
        </div>
    );
};

export default Submenu;