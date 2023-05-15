import React from 'react';

const HistoryCard = ({ data }) => {
    const {title, id, img} = data
    return (
        <div className="learning-skill-div">
            {img && <img src={img} alt="" /> }
            <p>{title}</p>
        </div>
    );
};

export default HistoryCard;