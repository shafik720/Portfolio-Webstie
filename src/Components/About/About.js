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
                <p>I'm a Full Stack Web Developer specialty in <span className="strong-text">Front-end Development</span> using React.js. I focus on writing accessible HTML, using modern CSS practice and writing clean Javascript. When writing javascript code, I mostly use <span className="important-text">React</span> , but <span className='strong-text'>I can adapt to whatever tools are required</span>. <br /> <br />
                I am familiar with <span className="strong-text">MongoDB</span> for data storage, <span className="strong-text"> Express.js</span> for server-side routing, and <span className="strong-text">Node.js</span> for backend development. <br /> <br />
                I have studied Bachelor of Science in <span className="strong-text"> Computer Science and Engineering </span>(incomplete) from Southern University Bangladesh, Ctg. <br /> <br />
                I'm based in Dhaka, Bangladesh, but I'm happy working <span className="strong-text">remotely</span> and have expreience in remote teams. With a Good foundation in <span className="strong-text">Computer Science principles</span>  and a Passion for continuous learning, I am eager to use my skills to make a <span className="strong-text">Meaningful Impact</span>  on a dynamic team. When I'm not coding, you'll find me outdoors. I love being out in nature whether that's going for a walk, run or motorcycling or having a journey by Boat. I'd love you to check out my works. </p>
            </div>
        </div>
    );
};

export default About;