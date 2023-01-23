import React from 'react';
import folderLogo from '../../../Utilities/img/logo/folder (1).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import './SingleProject.css';

const SingleProject = (props) => {
    const { id, github, liveSite, projectName, desc, technology, thumb } = props.index;
    const renderTooltip = props => (
        <Tooltip {...props}>Github Repo Link</Tooltip>
    );
    const renderTooltip2 = props => (
        <Tooltip {...props}>Live Site Link</Tooltip>
    );
    return (
        <div className="col-lg-6">
            <div className="h-100">
                <div className="single-projects h-100">
                    <div className="">
                        <div className="single-project-header">
                            <div className="project-header-left">
                                <img src={folderLogo} alt="" />
                            </div>
                            <div className="project-header-right">
                                {/* github link for projects */}

                                <OverlayTrigger placement="left" overlay={renderTooltip}>
                                    <a href={github} target="_blank" rel="noopener noreferrer">
                                        <span><FontAwesomeIcon icon={faGithub} /></span>
                                    </a>
                                </OverlayTrigger>

                                {/* live site link for project */}
                                <OverlayTrigger placement="bottom" overlay={renderTooltip2}>
                                    <a href={liveSite} target="_blank" rel="noopener noreferrer">
                                        <span><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span></a>
                                </OverlayTrigger>

                            </div>
                        </div>
                        <div className="single-project-body">
                            <div className="project-desc">
                                <h2>{projectName}</h2>
                                <p>{desc}</p>
                            </div>
                            <div className="project-thumb">
                                <div className="project-thumb-img-parent">
                                    <div className="project-thumb-img">
                                        <img src={thumb} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="single-project-footer">
                        <div className="project-technology">
                            {
                                technology.map(index => <span><p>{index}</p></span>)
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SingleProject;