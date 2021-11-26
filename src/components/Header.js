/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";

const Header = () => {
    return (
        <div id="home"className="header-wrapper">
            <div className="main-info">
                <h1>Hi,My Name is Vhonani Ramurunzi and I am a</h1>
                <Typed 
                className="typed-text"
                strings={["WEB DESIGNER", "WEB DEVELOPER", "SOFTWARE ENGINEER"]}
                typeSpeed={40}
                backSpeed={60}
                loop
                />
                <a id="footer" Link smooth={true} to="footer"  href="#" className="btn-main-offer nav-link">contact me</a>
            </div>

        </div>
    )
}

export default Header
