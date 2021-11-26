import React from "react";

import { Link } from "react-scroll";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className="container">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: "#fff" }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <Link smooth={true} to="Home" className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li href="about_me" className="nav-item">
              <Link smooth={true} to="About Me" offset={-110} className="nav-link" >about me</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="Skills" offset={-110} className="nav-link" href="#">skills</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="Education" offset={-110} className="nav-link" >education</Link>
            </li>
            <li className="nav-item">
              <Link smooth={true} to="Projects" offset={-110} className="nav-link" >projects</Link>
            </li>

          </ul>

        </div>

      </div>
    </nav>
  )
}

export default Navbar

