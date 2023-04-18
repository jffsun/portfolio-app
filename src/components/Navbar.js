import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link
          activeClass="active"
          to="home"
          // spy on current scroll position and update link accordingly
          spy={true}
          smooth={true}
          // vertical offset gap to avoid overlap with navbar and page
          offset={-70}
          // duration in ms of scroll animation
          duration={500}
        >
          Home
        </Link>
        </li>
      <li>
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
        <li>
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
      <li>
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
    </nav>
  );
};

export default Navbar;