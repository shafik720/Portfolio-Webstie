import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

import homeLogo from '../../Utilities/img/home.png';
import userLogo from '../../Utilities/img/avatar.png';
import skillLogo from '../../Utilities/img/skill.png';
import projectLogo from '../../Utilities/img/folder.png';



const Header = () => {
    const moveHeader= () => {
        // document.querySelector('.header-div').classList.add('active');
    }
    const moveHeader2 = () =>{
        // document.querySelector('.header-div').classList.remove('active');
    }
    return (
        <div onMouseEnter={moveHeader} onMouseLeave={moveHeader2} className="header-div">
            <div className="logo-icon">
                <img src={homeLogo} alt=""/>
                <p>Home</p>
            </div>
            <div className="logo-icon">
                <img src={userLogo} alt=""/>
                <p>About</p>
            </div>
            <div className="logo-icon">
                <img src={skillLogo} alt=""/>
                <p>Skills</p>
            </div>
            <div className="logo-icon">
                <img src={projectLogo} alt=""/>
                <p>Projects</p>
            </div>
        </div>
    );
};

export default Header;