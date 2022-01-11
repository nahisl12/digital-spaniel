import React from "react";
import "./About.css";
import Button from "../Helpers/Button";

import Office01 from "../../images/office01.png";
import Office02 from "../../images/office02.png";
import Office03 from "../../images/office03.png";
import Office04 from "../../images/office04.png";

const About = () => {
  return (
    <section className="about-container">
      <div className="masonry-gallery">
        <img src={Office01} alt="people-at-table" id="office-01" />

        <img src={Office03} alt="people-using-laptop" id="office-03" />

        <img src={Office04} alt="office-wall" id="office-04" />

        <img src={Office02} alt="office-hallway" id="office-02" />
      </div>

      <div className="extra-links">
        <Button text="About" link="/" active={true} />
        <Button text="Careers" link="/" />
      </div>
    </section>
  );
};

export default About;
