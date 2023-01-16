import React from 'react';
import './About.css';

const About = () => {
    return (
        <div id="about" className="about-div">
            <div className="about-header">
                <p>Some Info</p>
                <h2>About Me</h2>
            </div>
            <div className="about-desc"> 
                <p>I'm a Full Stack Web Developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practice and writing clean Javascript. When writing javascript code, I mostly use <span className="important-text">React</span> , but <span className='strong-text'>I can adapt to whatever tools are required</span>. I'm based in Dhaka, Bangladesh, but I'm happy working <span className="strong-text">remotely</span> and have expreience in remote teams. When I'm not coding, you'll find me outdoors. I love being out in nature whether that's going for a walk, run or motorcycling or having a journey by Boat. I'd love you to check out my work. </p>
            </div>
        </div>
    );
};

export default About;