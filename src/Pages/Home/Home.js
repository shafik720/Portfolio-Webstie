import React from 'react';
import Banner from '../../Components/Banner/Banner';
import About from '../../Components/About/About';
import Skills from '../../Components/Skills/Skills';
import LearningHistory from '../../Components/LearningHistory/LearningHistory';
import Projects from '../../Components/Projects/Projects';

const Home = () => {
    return (
        <div className="main-div">
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <LearningHistory></LearningHistory>
            <Projects></Projects>
        </div>
    );
};

export default Home;