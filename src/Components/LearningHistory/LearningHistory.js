import React from 'react';
import './LearningHistory.css';
import tailwindIcon from '../../Utilities/img/logo/tailwind-css.png'
import { useEffect } from 'react';
import HistoryCard from './HistoryCard';
import { useState } from 'react';

const LearningHistory = () => {
    const[data, setData] = useState([]);

    useEffect(()=>{
        fetch('learningHistory.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[]);
    const reversing = (arr) => {
        const dummy = arr.sort((a,b)=>b.id - a.id);
        return dummy;
    }
    // console.log(data.sort((a,b)=> b-a))
    return (
        <div className='learning-history'>
            <div className="about-header skill-header">
                <p>My </p>
                <h2>Learning History</h2>
            </div>
            <div className="learning-history-details">
                {/*----------------- History here  ---------------*/}
                {reversing(data).map(index => <HistoryCard key={index.id} data={index}></HistoryCard>)}
            </div>
        </div>
    );
};

export default LearningHistory;