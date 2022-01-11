import React from "react";
import "./Hero.css";
import heroImage from "../../images/Spaniel01_gradient.png";
import Button from "../Helpers/Button";

const Hero = () => {
  return (
    <>
      <header className="hero-container">
        {/* <NavBar /> */}
        <div className="description-container">
          <h5>BRAND, DEV, ECOM, MARKETING</h5>

          <h2 id="title-one">We unleash</h2>
          <h2 id="title-two">business potential</h2>

          <p>
            We create brand experiences which are memorable and distinct. Our experienced team create and
            develop brands with personality and resonance.
          </p>

          <Button text="Let's talk" url="/" />
        </div>

        <div className="image-container">
          <img src={heroImage} className="hero-picture" alt="spaniel-hero" />
        </div>
      </header>
    </>
  );
};

export default Hero;
