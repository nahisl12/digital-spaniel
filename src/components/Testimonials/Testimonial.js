import React, { useState } from "react";
import "./Testimonial.css";
import TestimonialIcon3 from "../../images/testimonial_face03.png";
import TestimonialIcon2 from "../../images/testimonial_face02.png";
import TestimonialIcon1 from "../../images/testimonial_face01.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";

const Testimonial = () => {
  let [activeCard, setActiveCard] = useState(2);

  return (
    <section className="testimonial-container">
      <div className="section-title">
        <h2 id="title-top">Kind words</h2>
        <h2 id="title-bottom">from our clients</h2>
      </div>

      <div className="cards">
        <div className={`testimonial ${activeCard === 1 ? "active-testimonial" : ""}`}>
          <span className="quote-mark-left">
            <FontAwesomeIcon icon={faQuoteLeft} size="2x" color="#C5CACE" />
          </span>
          <p>
            Working with Digital Spaniel has been a breath of fresh air. Their approach and attitude kept me
            informed and included from the start. Super pleased with the end results too!
          </p>
          <span className="quote-mark-right">
            <FontAwesomeIcon icon={faQuoteRight} size="2x" color="#C5CACE" />
          </span>

          <img src={TestimonialIcon3} alt="profile" />
          <span className="user-name">Paul Simon</span>
          <span className="user-occupation">Founder, MegaCorp</span>
        </div>

        {/* Middle testimonial */}
        <div className={`testimonial ${activeCard === 2 ? "active-testimonial" : ""}`}>
          <span className="quote-mark-left">
            <FontAwesomeIcon icon={faQuoteLeft} size="2x" color="#C5CACE" />
          </span>
          <p>
            Advice and support from DigiSpan was second to none. Always willing to help and offer advice and
            solutions. A very good and rapid understanding of our requirements was key to this.
          </p>
          <span className="quote-mark-right">
            <FontAwesomeIcon icon={faQuoteRight} size="2x" color="#C5CACE" />
          </span>

          <img src={TestimonialIcon1} alt="profile" className="middle-testimonial-image" />
          <span className="user-name">Johnny B. Goode</span>
          <span className="user-occupation">CEO, Getting Things Done</span>
        </div>

        <div className={`testimonial ${activeCard === 3 ? "active-testimonial" : ""}`}>
          <span className="quote-mark-left">
            <FontAwesomeIcon icon={faQuoteLeft} size="2x" color="#C5CACE" />
          </span>

          <p>
            We needed a creative and unique brand which could compete against established products. Digital
            Spaniel delivered in spades and we’ve seen a huge response to the product launch.
          </p>

          <span className="quote-mark-right">
            <FontAwesomeIcon icon={faQuoteRight} size="2x" color="#C5CACE" />
          </span>

          <img src={TestimonialIcon2} alt="profile" />
          <span className="user-name">Mary Jane</span>
          <span className="user-occupation">CEO, Design Matters</span>
        </div>
      </div>

      <div className="button-circles">
        <p
          className={` ${activeCard === 1 ? "active-button circle" : "inactive-button"}`}
          onClick={() => setActiveCard(1)}
        ></p>
        <p
          onClick={() => setActiveCard(2)}
          className={` ${activeCard === 2 ? "active-button circle" : "inactive-button"}`}
        ></p>
        <p
          onClick={() => setActiveCard(3)}
          className={` ${activeCard === 3 ? "active-button circle" : "inactive-button"}`}
        ></p>
      </div>
    </section>
  );
};

export default Testimonial;
