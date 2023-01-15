import React from 'react';
import './Skills.css';
import html from '../../Utilities/img/logo/html.png'

const Skills = () => {
    return (
        <div className="skill-div">
            <div className="about-header skill-header">
                <p>My Current</p>
                <h2>Skills</h2>
            </div>
            <div className="skill-details">
                <div className="skill-single-div">
                    <img src={html} alt=""/>
                    <p>HTML</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;