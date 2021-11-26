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
                        <div className="box">
                            <h3>Greetins-webapp</h3>
                            <p className="panel-body">
                                GitHub Repository: https://github.com/Vhonani24/greetings-webapp
                                Greetings-web-app allows user to enter their names and then greets the user in a
                                selected language: Spanish, Mandarin, or French. Users are also able to view the
                                people that have been greeted and it also shows how many times each person
                                was greeted. This app was built using express-flavored NodeJS, with Handlebars
                                for templating, and a PostgreSQL database. It was deployed to a Platform as a
                                service (Paas) server using Git.

                                </p>
                        </div>

                    </div>
                    {/* */}
                    <div className="col-12 col-sm-6 col-md-6 col-lg-6">
                        <div className="box">
                            <h3>Registrations-webapp</h3>
                            <p className="panel-body">
                                GitHub Repository: https://github.com/Vhonani24/registration_numbers_webapp
                                Registration-web-app allows user to enter valid car registration numbers from
                                Cape Town, Bellville, and Paarl. It displays number plates with rounded corners
                                and a yellow background with a black border at the bottom of the app. No
                                registration number will be added if the input field is empty. This app was built
                                using express-flavored NodeJS, with Handlebars for templating, and a
                                PostgreSQL database. It was deployed to a Platform as a service (Paas) server
                                using Git.

                                REFERENCES
                            </p>
                        </div>

                    </div>



                </div>
            </div>



        </div>
    )
}

export default Projects
