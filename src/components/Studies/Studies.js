import React from "react";
import "./Studies.css";
import Lab1 from "../../images/lab01.png";
import Dashboard from "../../images/dashboard01@2x.png";
import Socks from "../../images/socks.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Studies = () => {
  return (
    <section className="studies-container">
      <div className="section-header">
        <h1>Case Studies</h1>
        <p>
          Every project is different. We like to work collaboratively with our clients, tailoring each project
          to suit the needs of you and your business
        </p>
      </div>

      <div className="images-container">
        <div className="left-item">
          <img src={Lab1} alt="left-item" className="images" />
        </div>

        <div className="middle-item">
          <img src={Dashboard} alt="middle-item" className="images" />

          <div className="information-box">
            <h3>Project title here</h3>
            <p>Short project description goes here To explain what the project is all about.</p>
            <li>
              <a href="/">Read more</a>
            </li>

            <div id="box-buttons">
              <button id="left-button">
                <FontAwesomeIcon icon={faChevronLeft} size="1x" color="#506473" />
              </button>
              <button id="right-button">
                <FontAwesomeIcon icon={faChevronRight} size="1x" color="black" />
              </button>
            </div>
          </div>
        </div>

        <div className="right-item">
          <img src={Socks} alt="right-item" className="images" />
        </div>
      </div>

      <div className="next-section-title">
        <h2 id="title-top">What are</h2>
        <h2 id="title-bottom">we all about?</h2>
      </div>
    </section>
  );
};

export default Studies;
