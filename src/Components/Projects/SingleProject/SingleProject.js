import React from 'react';
import folderLogo from '../../../Utilities/img/logo/folder (1).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const SingleProject = (props) => {
    const {id, github, liveSite, projectName, desc, technology} = props.index;
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
                                                <a href={github} target="_blank" rel="noopener noreferrer">
                                                    <span><FontAwesomeIcon icon={faGithub} /></span>
                                                </a>
                                                <a href={liveSite} target="_blank" rel="noopener noreferrer">
                                                    <span><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span></a>
                                            </div>
                                        </div>
                                        <div className="single-project-body">
                                            <h2>{projectName}</h2>
                                            <p>{desc}</p>
                                        </div>
                                    </div>

                                    <div className="single-project-footer">
                                        <div className="project-technology">
                                        {
                                                technology.map(index=><span><p>{index}</p></span>)
                                                }
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
    );
};

export default SingleProject;