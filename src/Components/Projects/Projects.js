import React, { useEffect, useState } from 'react';
import './Projects.css';
import folderLogo from '../../Utilities/img/logo/folder (1).png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import SingleProject from './SingleProject/SingleProject';




const Projects = () => {
    const[projects, setProjects] = useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/shafik720/rest-api/main/all-projects.json')
        .then(res=>res.json())
        .then(data=>setProjects(data))
    },[])
    return (
        <div id="projects" className="project-div common-section">
            <h2>My Projects</h2>
            <hr />
            <div className="all-projects py-4">
                <div className="container">
                    <div className="row gy-5">
                        {
                            projects.map(index=><SingleProject 
                                index = {index}
                                key = {index.id}
                            ></SingleProject>)
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;