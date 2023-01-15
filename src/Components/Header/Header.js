import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

import homeLogo from '../../Utilities/img/home.png';



const Header = () => {
    return (
        <div className="header-div">
            <div className="logo-icon">
                <img src={homeLogo} alt=""/>
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