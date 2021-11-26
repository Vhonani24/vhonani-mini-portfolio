import React from 'react'
/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHTML5, faCSS, faDesktop} from "@fortawesome/free-solid-svg-icons";*/

const Projects = () => {
    return (
        <div className="projects">
            <h1 className="py-5">My Projects</h1>
            <div className="container">
                <div className="row">
                    {/* */}
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                        <div className="btn-main-offer">
                            <h3>Greetins-webapp</h3>
                            <a href="https://greetings-webapp-db.herokuapp.com"> Greetins-webapp</a>
                        </div>

                    </div>
                    {/* */}
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                        <div className="btn-main-offer">
                            <h3>Registrations-webapp</h3>
                            <a  href="https://registration-numbers-dbapp.herokuapp.com">Registrations-webapp</a>
                        </div>

                    </div>



                </div>
            </div>



        </div>
    )
}

export default Projects
