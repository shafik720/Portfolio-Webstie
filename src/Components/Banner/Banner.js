import React from 'react';
import './Banner.css';
import twitterLogo from '../../Utilities/img/logo/twitter (1).svg';
import githubLogo from '../../Utilities/img/logo/github.svg';
import linkedLogo from '../../Utilities/img/logo/likedin.svg';


const Banner = () => {
    return (
        <div id="banner" className="banner-div">
            <div className="banner-left-parent">
                <div className="banner-left"></div>
            </div>

            <div className="banner-right">
                <h2>Hi, I'm</h2>
                <h1>Shafiqul Hasan Russell</h1>
                <p>A Web Developer with a focus on the MERN stack, but still exploring other technologies and frameworks that catch my interest! if you're looking for a developer to add to your team, I'd love to hear from you!</p>
                <div className="social-icons">
                    {/*------------------ Github linking ---------------*/}
                    <div className="social-single-icon">
                        <a href="https://github.com/shafik720" target="_blank" rel="noopener noreferrer">
                            <div className="first-logo">
                                <img src={githubLogo} alt="" />
                            </div>
                        </a>
                    </div>
                    {/*------------------ LinkedIn linking ---------------*/}
                    <div className="social-single-icon">
                        <a href="https://www.linkedin.com/in/shafiq5russell/" target="_blank" rel="noopener noreferrer">
                            <div className="first-logo">
                                <img src={linkedLogo} alt="" />
                            </div>
                        </a>
                    </div>
                    {/*------------------ Twitter linking ---------------*/}
                    <a href="https://twitter.com/shafiq_russell" target="_blank" rel="noopener noreferrer">
                        <div className="social-single-icon">
                            <div className="first-logo">
                                <img src={twitterLogo} alt="" />
                            </div>
                        </div>
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Banner;