import React from 'react';
import './Skills.css';
import html from '../../Utilities/img/logo/html.png'
import css from '../../Utilities/img/logo/css.png'
import bootstrap from '../../Utilities/img/logo/bootstrap.png'
import javascript from '../../Utilities/img/logo/js.png'
import react from '../../Utilities/img/logo/react.png'
import firebase from '../../Utilities/img/logo/firebase.svg'
import node from '../../Utilities/img/logo/node-js.svg'
import express from '../../Utilities/img/logo/express.png'
import mongoDb from '../../Utilities/img/logo/mongodb.png'
import git from '../../Utilities/img/logo/github.svg'
import vscode from '../../Utilities/img/logo/vs code.png'
import api from '../../Utilities/img/logo/api.png'

const Skills = () => {
    return (
        <div className="skill-div">
            <div className="about-header skill-header">
                <p>My Current</p>
                <h2>Skills</h2>
            </div>
            <div className="skill-details">
                <div className="skill-single-div">
                    <img src={html} alt=""/>
                    <p>HTML</p>
                </div>
                <div className="skill-single-div">
                    <img src={css} alt=""/>
                    <p>CSS</p>
                </div>
                <div className="skill-single-div">
                    <img src={bootstrap} alt=""/>
                    <p>Bootstrap</p>
                </div>
                <div className="skill-single-div">
                    <img src={javascript} alt=""/>
                    <p>Javascript</p>
                </div>
                <div className="skill-single-div">
                    <img src={react} alt=""/>
                    <p>React</p>
                </div>
                <div className="skill-single-div">
                    <img src={mongoDb} alt=""/>
                    <p>MongoDB</p>
                </div>
                <div className="skill-single-div">
                    <img src={node} alt=""/>
                    <p>NodeJs</p>
                </div>
                <div className="skill-single-div">
                    <img src={firebase} alt=""/>
                    <p>Firebase</p>
                </div>
                <div className="skill-single-div">
                    <img src={express} alt=""/>
                    <p>Express</p>
                </div>
                <div className="skill-single-div">
                    <img src={git} alt=""/>
                    <p>Github</p>
                </div>
                <div className="skill-single-div">
                    <img src={vscode} alt=""/>
                    <p>Vs Code</p>
                </div>
                <div className="skill-single-div">
                    <img src={api} alt=""/>
                    <p>Api</p>
                </div>
            </div>
        </div>
    );
};

export default Skills;