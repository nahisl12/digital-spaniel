import React from "react";
import "./Helpers.css";

const Button = ({ text, url, active }) => {
  return (
    <div className={`editable-button ${active === true ? "" : ""}`}>
      <li>
        <a href={url}>{text}</a>
      </li>
    </div>
  );
};

export default Button;
