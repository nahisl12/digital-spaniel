import React from "react";
import Button from "../Helpers/Button";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <section className="footer-container">
      <div className="main-info">
        <div className="footer-title-section">
          <div>
            <h2 id="title-top">We're a brands</h2>
            <h2 id="title-bottom">best friend</h2>
          </div>

          <div className="footer-link">
            <Button text="Let's talk" link="/" active="false" id="footer-link" />
          </div>
        </div>

        <div className="links-section">
          <div>
            <h3>Explore</h3>
            <ul>
              <li>
                <a href="/">Services</a>
                <span className="arrow-container">&#62;</span>
              </li>
              <li>
                <a href="/">Work</a>
                <span className="arrow-container">&#62;</span>
              </li>
              <li>
                <a href="/">About</a>
                <span className="arrow-container">&#62;</span>
              </li>
              <li>
                <a href="/">Blog</a>
                <span className="arrow-container">&#62;</span>
              </li>
              <li>
                <a href="/">Careers</a>
                <span className="arrow-container">&#62;</span>
              </li>
            </ul>
          </div>

          <div>
            <h3>Services</h3>
            <ul>
              <li>
                <a href="/">Brand</a>
                <span className="arrow-container">&#62;</span>
              </li>
              <li>
                <a href="/">Development</a>
                <span className="arrow-container">&#62;</span>
              </li>
              <li>
                <a href="/">Marketing</a>
                <span className="arrow-container">&#62;</span>
              </li>
            </ul>
          </div>

          <div>
            <h3>Questions?</h3>
            <h4>Call Us</h4>
            <p>0121 345 678</p>

            <h4>Email Us</h4>
            <p>info@digitalspaniel.co.uk</p>
          </div>
        </div>
      </div>

      <div className="social-section">
        <p>Copyright © Digital Spaniel 2019. All rights reserved.</p>

        <div>
          <a href="/">
            <FontAwesomeIcon icon={faFacebookF} size="2x" className="social-icons" />
          </a>

          <a href="/">
            <FontAwesomeIcon icon={faTwitter} size="2x" className="social-icons" />
          </a>
          <a href="/">
            <FontAwesomeIcon icon={faInstagram} size="2x" className="social-icons" />
          </a>
          <a href="/">
            <FontAwesomeIcon icon={faLinkedinIn} size="2x" className="social-icons" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
