import React, { useEffect, useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle, faBars } from '@fortawesome/free-solid-svg-icons';

import homeLogo from '../../Utilities/img/home.png';
import userLogo from '../../Utilities/img/avatar.png';
import skillLogo from '../../Utilities/img/skill.png';
import projectLogo from '../../Utilities/img/folder.png';

import { Link, animateScroll as scroll } from "react-scroll";



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
    const moveAllClass = () => {
        document.querySelector('.menubar-mobile').classList.remove('active');
        document.querySelector('.header-div').classList.remove('mobile');
        document.querySelector('.header-div').classList.remove('active');
    }
    return (
        <div draggable onMouseEnter={moveHeader} onMouseLeave={moveHeader2} className="header-div">
            <div draggable onClick={() => setIsActive(!isActive)} className="menubar-mobile">
                <span className="menu-open"><FontAwesomeIcon icon={faBars} /></span>
                <span className="menu-close"><FontAwesomeIcon icon={faXmarkCircle} /></span>
            </div>
            <div draggable className="logo-icon">
                <Link
                    activeClass="active"
                    to="banner"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={200}
                    onClick={moveAllClass}
                >
                    <img src={homeLogo} alt="" />
                    <p className="logo-text">Home</p>
                </Link>
            </div>
            <div draggable className="logo-icon">
                <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={200}
                    onClick={moveAllClass}
                >
                    <img src={userLogo} alt="" />
                    <p className="logo-text">About</p>
                </Link>
            </div>
            <div draggable className="logo-icon">
                <Link
                    activeClass="active"
                    to="skill"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={200}
                    onClick={moveAllClass}
                >
                    <img src={skillLogo} alt="" />
                    <p className="logo-text">Skills</p>
                </Link>

            </div>
            <div draggable className="logo-icon">
                <Link
                    activeClass="active"
                    to="projects"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={300}
                    onClick={moveAllClass}
                >
                    <img src={projectLogo} alt="" />
                    <p className="logo-text">Projects</p>
                </Link>
            </div>
        </div>
    );
};

export default Header;