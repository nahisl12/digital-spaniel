import React, { useState, useEffect } from "react";
import "./NavBar.css";
import Logo from "../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY); // initial scroll position
  const [visibleNav, setVisibleNav] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", navScroll);

    return () => {
      window.removeEventListener("scroll", navScroll);
    };
  });

  const toggleNav = () => {
    isNavbarOpen ? setIsNavbarOpen(false) : setIsNavbarOpen(true);
  };

  const setNavbarFalse = () => {
    setIsNavbarOpen(false);
  };

  const navScroll = () => {
    let currScrollPos = window.scrollY; // get current scroll pos for comparisons with prev

    if (window !== undefined) {
      if (prevScrollPos > currScrollPos) {
        setVisibleNav(true);
        setPrevScrollPos(currScrollPos);
      } else {
        setVisibleNav(false);
        setPrevScrollPos(currScrollPos);
      }
    }
  };

  return (
    <nav className={`nav-container ${visibleNav ? "navbar-visible" : "navbar-hidden"}`}>
      <div className="navbar">
        <img src={Logo} alt="" />
        <ul className={`nav-elements ${isNavbarOpen ? "active" : ""}`}>
          <li className="active" onClick={() => setNavbarFalse()}>
            <a className="link default-link" href="/">
              Services
            </a>
          </li>
          <li onClick={() => setNavbarFalse()}>
            <a className="links" href="/">
              Work
            </a>
          </li>
          <li onClick={() => setNavbarFalse()}>
            <a className="links" href="/">
              About
            </a>
          </li>
          <li onClick={() => setNavbarFalse()}>
            <a className="links" href="/">
              Blog
            </a>
          </li>
          <li onClick={() => setNavbarFalse()}>
            <a className="links" href="/">
              Contact
            </a>
          </li>
        </ul>

        <button className="hamburger" onClick={toggleNav}>
          {isNavbarOpen ? (
            <FontAwesomeIcon icon={faTimes} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faBars} size="2x" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
