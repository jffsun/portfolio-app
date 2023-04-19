import React from "react";
import { Link } from "react-scroll";

// destructure handleNavClick function passed
const Header = () => {

  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li className="nav-link">
          <Link
          activeClass="active"
          // looks for element id "home"
          to="home"
          // spy on current scroll position and update link accordingly
          spy={true}
          smooth={true}
          // vertical offset gap to avoid overlap with header and page
          offset={-70}
          // duration in ms of scroll animation
          duration={500}
        >
          Home
        </Link>
        </li>
      <li className="nav-link">
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          About
        </Link>
      </li>
        <li className="nav-link"> 
        <Link
          activeClass="active"
          to="work"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Work
        </Link>
        </li>
      <li className="nav-link">
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          Contact
        </Link>
      </li>
      </ul>
      {/* TO DO: TOGGLE LIGHT DARK BUTTON */}
    </nav>
  );
};

export default Header;