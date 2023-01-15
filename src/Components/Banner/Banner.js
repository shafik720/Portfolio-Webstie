import React from 'react';
import './Banner.css';
import twitterLogo from '../../Utilities/img/logo/twitter (3).svg';
import githubLogo from '../../Utilities/img/logo/github.svg';
import linkedLogo from '../../Utilities/img/logo/likedin (1).svg';


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
                <div className="social-icons">
                    <div className="social-single-icon">
                        <div className="first-logo">
                            <img src={githubLogo} alt="" />
                        </div>
                    </div>
                    <div className="social-single-icon">
                        <div className="first-logo">
                            <img src={linkedLogo} alt="" />
                        </div>
                    </div>
                    <div className="social-single-icon">
                        <div className="first-logo">
                            <img src={twitterLogo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;