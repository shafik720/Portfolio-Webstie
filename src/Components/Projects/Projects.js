import React from 'react';
import './Projects.css';
import folderLogo from '../../Utilities/img/logo/folder (1).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'




const Projects = () => {
    return (
        <div className="project-div common-section">
            <h2>My Projects</h2>
            <hr />
            <div className="all-projects py-4">
                <div className="container">
                    <div className="row gy-5">
                        <div className="col-lg-6">
                            <div className="h-100">
                                <div className="single-projects h-100">
                                    <div className="">
                                        <div className="single-project-header">
                                            <div className="project-header-left">
                                                <img src={folderLogo} alt="" />
                                            </div>
                                            <div className="project-header-right">
                                                <a href="https://github.com/shafik720/Photographer-Website-Portfolio---E-commerce--with-React" target="_blank" rel="noopener noreferrer">
                                                    <span><FontAwesomeIcon icon={faGithub} /></span>
                                                </a>
                                                <a href="https://photographer-portfolio-shafik.netlify.app/" target="_blank" rel="noopener noreferrer">
                                                    <span><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span></a>
                                            </div>
                                        </div>
                                        <div className="single-project-body">
                                            <h2>Photographer's Website (Portfolio + E-commerce)</h2>
                                            <p>This is a website where a photographer portfolio is displayed alongside with e-commerce functionality.</p>
                                            <p>This site is fully responsive. It's made with React Js, Firebase Authentication, React Bootstrap. For storing user cart information i have used Local Storage.</p>
                                        </div>
                                    </div>

                                    <div className="single-project-footer">
                                        <div className="project-technology">
                                            <span><p>Html</p></span>
                                            <span><p>Css</p></span>
                                            <span><p>Javascript</p></span>
                                            <span><p>React</p></span>
                                            <span><p>Firebase</p></span>
                                            <span><p>Local Storage</p></span>
                                            <span><p>React Bootstrap</p></span>
                                            <span><p>React Router</p></span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* ------ */}
                        {/* ------ */}
                        <div className="col-lg-6">
                            <div className="h-100">
                                <div className="single-projects h-100">
                                    <div className="">
                                        <div className="single-project-header">
                                            <div className="project-header-left">
                                                <img src={folderLogo} alt="" />
                                            </div>
                                            <div className="project-header-right">
                                                <a href="https://github.com/shafik720/Tetris-Game-with-Vanilla-Javascript-Html-Css" target="_blank" rel="noopener noreferrer">
                                                    <span><FontAwesomeIcon icon={faGithub} /></span>
                                                </a>
                                                <a href="https://tetris-russell.netlify.app/" target="_blank" rel="noopener noreferrer">
                                                    <span><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span></a>
                                            </div>
                                        </div>
                                        <div className="single-project-body">
                                            <h2>Tetris Game </h2>
                                            <p>I made this famous childhood tetris game with Vanilla Javascript, Html, Css</p>
                                        </div>
                                    </div>

                                    <div className="single-project-footer">
                                        <div className="project-technology">
                                            <span><p>Html</p></span>
                                            <span><p>Css</p></span>
                                            <span><p>Javascript</p></span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* ------ */}
                        {/* ------ */}
                        <div className="col-lg-6">
                            <div className="h-100">
                                <div className="single-projects h-100">
                                    <div className="">
                                        <div className="single-project-header">
                                            <div className="project-header-left">
                                                <img src={folderLogo} alt="" />
                                            </div>
                                            <div className="project-header-right">
                                                <a href="https://github.com/shafik720/Card-Memory-Game-with-Javascript-Html-Css" target="_blank" rel="noopener noreferrer">
                                                    <span><FontAwesomeIcon icon={faGithub} /></span>
                                                </a>
                                                <a href="https://card-memory-game-shafiq.netlify.app/" target="_blank" rel="noopener noreferrer">
                                                    <span><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span></a>
                                            </div>
                                        </div>
                                        <div className="single-project-body">
                                            <h2>Card Memory Game </h2>
                                            <p>This is a Card Memory Game where user have to memorize pictures and guess them correctly. I made this game with Vanilla Javascript, Html, Css only.</p>
                                        </div>
                                    </div>

                                    <div className="single-project-footer">
                                        <div className="project-technology">
                                            <span><p>Html</p></span>
                                            <span><p>Css</p></span>
                                            <span><p>Javascript</p></span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* ------ */}
                        {/* ------ */}
                        <div className="col-lg-6">
                            <div className="h-100">
                                <div className="single-projects h-100">
                                    <div className="">
                                        <div className="single-project-header">
                                            <div className="project-header-left">
                                                <img src={folderLogo} alt="" />
                                            </div>
                                            <div className="project-header-right">
                                                <a href="https://github.com/shafik720/Project---Math-Game" target="_blank" rel="noopener noreferrer">
                                                    <span><FontAwesomeIcon icon={faGithub} /></span>
                                                </a>
                                                <a href="https://math-game-by-shafiq.netlify.app/" target="_blank" rel="noopener noreferrer">
                                                    <span><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span></a>
                                            </div>
                                        </div>
                                        <div className="single-project-body">
                                            <h2>Math Game </h2>
                                            <p>User will play this game by selecting the correct box with the correct result of multiplying 2 numbers showing at the top of the screen. There will be  4 boxes, Only one of them will have right answers only. This game is made with Vanilla Javascript, Html, Css</p>
                                        </div>
                                    </div>

                                    <div className="single-project-footer">
                                        <div className="project-technology">
                                            <span><p>Html</p></span>
                                            <span><p>Css</p></span>
                                            <span><p>Javascript</p></span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* ------ */}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;