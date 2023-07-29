import React from 'react';
import catOne from '../../../../src/assets/img/cat 1.png';
import catTwo from '../../../../src/assets/img/cat 2.png';

const Submenu = () => {
    // const navigation = Navigate();
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
                <a href="" onClick={() => handleLink('home')}>Home</a>
                <a href="">Blogs</a>
            </div>
            <div className='horizontal' />
        </div>
    );
};

export default Submenu;