import React from 'react';
import html from "../html.png";
import css from "../css.png";
import js from "../JS.jpg";
import node from "../node.png";
import sql from "../sql.png";
import posgres from "../posgres.png";
import react from "../react.png";
import git from "../git.png";
import bootstrap from "../bootstrap.png";
/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHTML5, faCSS, faDesktop} from "@fortawesome/free-solid-svg-icons";*/

const Skills = () => {
    return (
        <div className="skills">
            <h1 className="py-5">My Skills</h1>
            <div className="container">
                <div className="row">
                    {/* */}
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <h3>HTML5</h3>
                            <div className="photo-wrap mb-5">
                                <img className="icons-img" src={html} alt="html..." />

                            </div>
                        </div>

                    </div>
                    {/* */}
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <h3>CSS</h3>
                            <div className="photo-wrap mb-5">
                                <img className="icons-img" src={css} alt="css..." />

                            </div>
                        </div>

                    </div>
                    {/* */}
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <h3>JavaScript</h3>
                            <div className="photo-wrap mb-5">
                                <img className="icons-img" src={js} alt="js..." />

                            </div>
                        </div>

                    </div>
                    {/* */}
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <h3>Node Js</h3>
                            <div className="photo-wrap mb-5">
                                <img className="icons-img" src={node} alt="node..." />

                            </div>
                        </div>

                    </div>
                    {/* */}
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <h3>SQL</h3>
                            <div className="photo-wrap mb-5">
                                <img className="icons-img" src={sql} alt="sql..." />

                            </div>
                        </div>

                    </div>
                    {/* */}
                    {/* */}
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <h3>PosgreSQL</h3>
                            <div className="photo-wrap mb-5">
                                <img className="icons-img" src={posgres} alt="posgres..." />

                            </div>
                        </div>

                    </div>
                    {/* */}
                    {/* */}
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <h3>React</h3>
                            <div className="photo-wrap mb-5">
                                <img className="icons-img" src={react} alt="react..." />

                            </div>
                        </div>

                    </div>
                    {/* */}
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <h3>GIT & GitHub</h3>
                            <div className="photo-wrap mb-5">
                                <img className="icons-img" src={git} alt="git..." />

                            </div>
                        </div>

                    </div>
                    {/* */}
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <h3>Bootstrap</h3>
                            <div className="photo-wrap mb-5">
                                <img className="icons-img" src={bootstrap} alt="bootstrap..." />

                            </div>
                        </div>

                    </div>
                </div>
            </div>



        </div>
    )
}

export default Skills
