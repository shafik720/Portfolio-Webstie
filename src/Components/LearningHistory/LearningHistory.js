import React from 'react';
import './LearningHistory.css';
import tailwindIcon from '../../Utilities/img/logo/tailwind-css.png'

const LearningHistory = () => {
    return (
        <div className='learning-history'>
            <div className="about-header skill-header">
                <p>My </p>
                <h2>Learning History</h2>
            </div>
            <div className="learning-history-details">
                {/*------------------  ---------------*/}
                <div className="learning-skill-div">
                    <img src={tailwindIcon} alt="" />
                    <p>Tailwind Css</p>
                </div>
            </div>
        </div>
    );
};

export default LearningHistory;