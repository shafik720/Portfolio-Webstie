import React, { useEffect, useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle, faBars } from '@fortawesome/free-solid-svg-icons';

import homeLogo from '../../Utilities/img/home.png';
import userLogo from '../../Utilities/img/avatar.png';
import skillLogo from '../../Utilities/img/skill.png';
import projectLogo from '../../Utilities/img/folder.png';



const Header = () => {
    const moveHeader = () => {
        document.querySelector('.header-div').classList.add('active');
        // document.querySelector('.logo-text').classList.add('active');
    }
    const moveHeader2 = () => {
        document.querySelector('.header-div').classList.remove('active');
        // document.querySelector('.logo-text').classList.remove('active');
    }

    // toggling mobile menu icon
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        if (isActive) {
            document.querySelector('.menubar-mobile').classList.add('active');
            document.querySelector('.header-div').classList.add('mobile');
        } else {
            document.querySelector('.menubar-mobile').classList.remove('active');
            document.querySelector('.header-div').classList.remove('mobile');
        }
    }, [isActive])
    return (
        <div draggable onMouseEnter={moveHeader} onMouseLeave={moveHeader2} className="header-div">
            <div draggable onClick={() => setIsActive(!isActive)} className="menubar-mobile">
                <span className="menu-open"><FontAwesomeIcon icon={faBars} /></span>
                <span className="menu-close"><FontAwesomeIcon icon={faXmarkCircle} /></span>
            </div>
            <div draggable className="logo-icon">
                <img src={homeLogo} alt="" />
                <p className="logo-text">Home</p>
            </div>
            <div draggable className="logo-icon">
                <img src={userLogo} alt="" />
                <p className="logo-text">About</p>
            </div>
            <div draggable className="logo-icon">
                <img src={skillLogo} alt="" />
                <p className="logo-text">Skills</p>
            </div>
            <div draggable className="logo-icon">
                <img src={projectLogo} alt="" />
                <p className="logo-text">Projects</p>
            </div>
        </div>
    );
};

export default Header;