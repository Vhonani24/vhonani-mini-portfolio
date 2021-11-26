/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>6A August St,Schotsche Kloof,Cape Town,8001</p>
            </div>
            <div className="d-flex">
              <a href="tel:072-1831-733">+27(72)183-1733</a>
            </div>
            <div className="d-flex">
              <p>vhonani.ramu@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav">Home</a>
                <br />
                <a className="footer-nav">About Me</a>
                <br />
                <a className="footer-nav">Skills</a>
              </div>
              <div className="col">
                <a className="footer-nav">Education</a>
                <br />
                <a className="footer-nav">Projects</a>
                <br />
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Vhonani Ramurunzi | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
      </div>
    
  )
}

export default Footer;
