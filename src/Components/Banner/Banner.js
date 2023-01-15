import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner-div">
            <div className="banner-left-parent">
                <div className="banner-left"></div>
            </div>

            <div className="banner-right">
                <p>Hi </p>
                <h2>I'm</h2>
                <h1>Shafiqul Hasan Russell</h1>
                <p>A Front-End Web Developer passionate about creating interactive applications and experiences on the web.</p>
            </div>
        </div>
    );
};

export default Banner;