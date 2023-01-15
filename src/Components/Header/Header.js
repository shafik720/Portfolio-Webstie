import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

import homeLogo from '../../Utilities/img/home.png';



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
                <img src={homeLogo} alt=""/>
            </div>
            <div className="logo-icon">
                <img src={homeLogo} alt=""/>
            </div>
            <div className="logo-icon">
                <img src={homeLogo} alt=""/>
            </div>
        </div>
    );
};

export default Header;