import React from 'react';
import './Projects.css';
import folderLogo from '../../Utilities/img/logo/folder (1).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons' 




const Projects = () => {
    return (
        <div className="common-section">
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
                    <div className="single-project-body"></div>
                    <div className="single-project-footer"></div>
                </div>
            </div>
        </div>
    );
};

export default Projects;