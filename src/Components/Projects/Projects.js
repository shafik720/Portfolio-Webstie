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
                                            <span><FontAwesomeIcon icon={faGithub} /></span>
                                            <span><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span>
                                        </div>
                                    </div>
                                    <div className="single-project-body">
                                        <h2>Photographer's Website (Portfolio + E-commerce)</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error recusandae magnam illum placeat minima a eius iusto qui? Magnam facilis quas laboriosam mollitia minus quibusdam tempore fuga maiores, commodi ullam.</p>
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
                                            <span><FontAwesomeIcon icon={faGithub} /></span>
                                            <span><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span>
                                        </div>
                                    </div>
                                    <div className="single-project-body">
                                        <h2>Photographer's Website (Portfolio + E-commerce)</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error recusandae magnam illum placeat minima a eius iusto qui? Magnam facilis quas laboriosam mollitia minus quibusdam tempore fuga maiores, commodi ullam.</p>
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
                                            <span><FontAwesomeIcon icon={faGithub} /></span>
                                            <span><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span>
                                        </div>
                                    </div>
                                    <div className="single-project-body">
                                        <h2>Photographer's Website (Portfolio + E-commerce)</h2>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error recusandae magnam illum placeat minima a eius iusto qui? Magnam facilis quas laboriosam mollitia minus quibusdam tempore fuga maiores, commodi ullam.</p>
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
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;