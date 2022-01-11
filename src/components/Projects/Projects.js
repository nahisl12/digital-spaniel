import React, { useState } from "react";
import "./Projects.css";
import Button from "../Helpers/Button";

import Whellies from "../../images/whellies01.png";
import Newspaper from "../../images/newspaper02.png";
import Makerek from "../../images/makerek.png";
import Newspaper2 from "../../images/newspaper.png";
import Rider from "../../images/rider01.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  const [tabs] = useState(4);
  let [currentTab, setCurrentTab] = useState(1);

  const nextTab = () => {
    if (currentTab !== tabs) {
      setCurrentTab((currentTab += 1));
    } else {
      setCurrentTab(1);
    }
    console.log(currentTab);
  };

  const prevTab = () => {
    if (currentTab !== 1) {
      setCurrentTab(currentTab - 1);
    } else {
      setCurrentTab(tabs); // sets back to whatever the max tabs is
    }
    console.log(currentTab);
  };

  return (
    <section className="projects-container">
      <div className="title-section">
        <h2 id="title-top">Some of our</h2>
        <h2 id="title-bottom">recent projects</h2>
      </div>

      <div className="tabs">
        <button
          onClick={() => setCurrentTab(1)}
          className={`category-button category-underline ${currentTab === 1 ? "active-tab" : ""}`}
        >
          All
        </button>
        <button
          onClick={() => setCurrentTab(2)}
          className={`category-button category-underline ${currentTab === 2 ? "active-tab" : ""}`}
        >
          Branding
        </button>
        <button
          onClick={() => setCurrentTab(3)}
          className={`category-button category-underline ${currentTab === 3 ? "active-tab" : ""}`}
        >
          Web Design
        </button>
        <button
          onClick={() => setCurrentTab(4)}
          className={`category-button category-underline ${currentTab === 4 ? "active-tab" : ""}`}
        >
          Digital Marketing
        </button>
      </div>

      <div className="gallery">
        <img src={Whellies} alt="" className="display-item" id="whellies" />

        <div className="newspaper-card">
          <img src={Newspaper} alt="" className="display-item" id="newspaper" />
          <div className="card-info">
            <h3>Make Ideas Happen</h3>

            <div id="card-paragraph">
              <p>A local paper with big ideas needed</p>
              <p id="paragraph-bottom">A sharp new brand to inspire readers.</p>
            </div>

            <li>
              <a href="/">Full project</a>
            </li>
          </div>
        </div>

        <img src={Makerek} alt="" className="display-item" id="makerek" />
        <img src={Newspaper2} alt="" className="display-item" id="two-blocks" />
        <img src={Rider} alt="" className="display-item" id="rider" />
      </div>

      <div className="navigation-buttons">
        <Button text="See all work" link="/" />

        <div>
          <button id="button-prev" onClick={prevTab}>
            <FontAwesomeIcon icon={faChevronLeft} size="1x" color="#506473" />
          </button>
          <button id="button-next" onClick={nextTab}>
            <FontAwesomeIcon icon={faChevronRight} size="1x" color="white" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
