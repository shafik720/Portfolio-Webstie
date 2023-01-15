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
            <div className="all-projects">
                <div className="single-projects">
                    <div className="single-project-header">
                        <div className="project-header-left">
                            <img src={folderLogo} alt=""/>
                        </div>
                        <div className="project-header-right">
                            <span><FontAwesomeIcon icon={faGithub} /></span>
                            <span><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span>
                        </div>
                    </div>
                    <div className="single-project-body">
                        <h2>Photographer's Website (Portfolio + E-commerce)</h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error recusandae magnam illum placeat minima a eius iusto qui? Magnam facilis quas laboriosam mollitia minus quibusdam tempore fuga maiores, commodi ullam.</p>
                        <div className="project-technology">
                            <span><p>Html</p></span>
                            <span><p>Css</p></span>
                            <span><p>Javascript</p></span>
                            <span><p>ReactJs</p></span>
                            <span><p>Firebase</p></span>
                            <span><p>Local Storage</p></span>
                            <span><p>React Bootstrap</p></span>
                            <span><p>React Router</p></span>
                        </div>
                    </div>
                    <div className="single-project-footer"></div>
                </div>
            </div>
        </div>
    );
};

export default Projects;