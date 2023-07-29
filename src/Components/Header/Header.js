import React, { useContext, useEffect, useState } from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle, faBars } from '@fortawesome/free-solid-svg-icons';

import homeLogo from '../../Utilities/img/home.png';
import userLogo from '../../Utilities/img/avatar.png';
import skillLogo from '../../Utilities/img/skill.png';
import projectLogo from '../../Utilities/img/folder.png';

import { Link, animateScroll as scroll } from "react-scroll";
import { ModalContext } from '../../Utilities/Context Api/ModalContext';
import { Link as Link2, NavLink, useLocation } from 'react-router-dom';



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

    // --- changing navbar according to the address
    const { changeNavbar, isBlog } = useContext(ModalContext);

    if (window.location.href.includes('blogs/')) {
        changeNavbar(true);
    } else {
        changeNavbar(false);
    }
    return (
        <div className="">
            {isBlog ?

                // --------------------- Blog Menu ------------------------------
                <div draggable onMouseEnter={moveHeader} onMouseLeave={moveHeader2} className={`header-div header-div-blog`}>
                    <div draggable onClick={() => setIsActive(!isActive)} className="menubar-mobile">
                        <span className="menu-open"><FontAwesomeIcon icon={faBars} /></span>
                        <span className="menu-close"><FontAwesomeIcon icon={faXmarkCircle} /></span>
                    </div>

                    <div draggable className="logo-icon">
                        <NavLink
                            to="/blogs/allBlogs"
                        >
                            <img src="https://i.ibb.co/1LMMKM7/all.png" alt="" />
                            <p className="logo-text" >All</p>
                        </NavLink>
                    </div>

                    <div draggable className="logo-icon">
                        <NavLink
                            to="/blogs/webBlogs/react"
                        >
                            <img src="https://i.ibb.co/qnPG9fF/react.png" alt="" />
                            <p className="logo-text" >React</p>
                        </NavLink>
                    </div>

                    <div draggable className="logo-icon">
                        <NavLink
                            to="/blogs/webBlogs"
                        >
                            <img src="https://i.ibb.co/b7YsSyw/world-wide-web.png" alt="" />
                            <p className="logo-text" >Web</p>
                        </NavLink>
                    </div>

                    <div draggable className="logo-icon">
                        <NavLink
                            to="/blogs/webDevelopment"
                        >
                            <img src="https://i.ibb.co/CMy7CZf/mac.png" alt="" />
                            <p className="logo-text" >Mac</p>
                        </NavLink>
                    </div>
                    <div draggable className="logo-icon">
                        <NavLink
                            to="/blogs/webDevelopment"
                        >
                            <img src="https://i.ibb.co/JsTcbXF/hacker.png" alt="" />
                            <p className="logo-text" >Others</p>
                        </NavLink>
                    </div>
                </div>
                :
                // --------------------- Home Menu ------------------------------
                <div draggable onMouseEnter={moveHeader} onMouseLeave={moveHeader2} className={`header-div`}>
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
                            <p className="logo-text" >Home</p>
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
            }
        </div>
    );
};

export default Header;