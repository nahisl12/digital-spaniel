import React from "react";
import "./Capabilities.css";
import Button from "../Helpers/Button";

const Capabilities = () => {
  return (
    <section className="capabilities-container">
      <div className="flex-container">
        <div id="left-side">
          <h2 id="title-top">What are</h2>
          <h2 id="title-bottom">we capable of</h2>

          <p>
            By focusing on design as an enabler and putting a huge emphasis on our clients as co-producers, we
            create innovative, sustainable marketing that enhances brand experience and user engagement.
          </p>

          <Button text="Our process" link="/" />
        </div>

        <div id="right-side">
          <div className="section-links brand-strategy">
            <h4>Brand</h4>
            <ul>
              <li className="selected">
                <a href="/">Brand Strategy</a>
                <span className="arrow-container">&#62;</span>
              </li>
              <li>
                <a href="/">Logo & Name</a>
                <span className="arrow-container">&#62;</span>
              </li>
              <li>
                <a href="/">Identity & Collateral</a>
                <span className="arrow-container">&#62;</span>
              </li>
            </ul>
          </div>

          <div className="section-links development">
            <h4 id="development-title">Development</h4>
            <ul>
              <li>
                <a href="/">eCommerce</a>
                <span className="arrow-container">&#62;</span>
              </li>
              <li>
                <a href="/">Web Development</a>
                <span className="arrow-container">&#62;</span>
              </li>
              <li>
                <a href="/">Mobile Apps</a>
                <span className="arrow-container">&#62;</span>
              </li>
            </ul>
          </div>

          <div className="section-links section-marketing">
            <h4>Marketing</h4>
            <ul>
              <li>
                <a href="/">Digital</a>
                <span className="arrow-container">&#62;</span>
              </li>
              <li>
                <a href="/">Market Research</a>
                <span className="arrow-container">&#62;</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
