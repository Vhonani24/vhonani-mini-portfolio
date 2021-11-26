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
                <div className="col-lg-6 col-xm-12" id="about_me">
                    <h1 className="about-heading">About Me</h1>
                    <p>My name is Vhonani Ramurunzi. I am currently completing a 12-month Agile Web Development bootcamp program at Codex Academy which is fully funded by Google.
                    I offer almost a year of experience working in an Agile environment learning how to build Agile web-based applications.I have been waiting for SovTech to advertise a suitable role that matches my skills for many months now. Having researched the company, I really want to work for SovTech because of the way you SovTech treats its clients, develops its staff and more importantly, stay ahead of the competition.Finally, I have many quality attributes that I believe would work very well within this role, and these include time management, planning, ability to prioritize, ability to work under pressure, and paying attention to detail, effective communication, and ability to adapt.
                    </p>
                </div>

            </div>

        </div>
    )
}

export default AboutMe
