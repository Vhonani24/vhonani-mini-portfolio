import React from "react";
import vhonani from "../Vhonani.png";

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img"src={vhonani} alt="vhonani..." />

                    </div>

                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About Me</h1>
                    <p>My name is Vhonani Ramurunzi. I am currently completing a 12-month Agile Web Development bootcamp program at Codex Academy which is fully funded by Google
                    I offer almost a year of experience working in an Agile environment learning how to build Agile web-based applications
                    </p>
                </div>

            </div>

        </div>
    )
}

export default AboutMe
