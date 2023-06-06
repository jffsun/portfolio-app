import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import '../styles/Navbar.css';

const Navbar = () => {

  // state controlling whether links are displayed and intially hidden
  const [showLinks, setShowLinks] = useState(false);

  // function to toggle between showLinks state
  const handleToggleClick = () => {
    setShowLinks(!showLinks);
  };

  // first arg is handleResize()func that runs side effect code
  useEffect(() => {
    const handleResize = () => {
      // if screen size width is less than 768px, hide horizontal navbar
      if (window.innerWidth < 768) {
        setShowLinks(false);
        console.log('screensize less than 768px')
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
    // second arg contains dependencies when else to run side effect code 
    // therefore useEffect hook only runs once which is after component's initial render
  }, []);
  return (
    <header className="sticky-top">
      <div className="navbar-container">
        <nav className="navbar">
          {/* on button click, toggle state of showLink */}
          <button className="navbar-toggler navbar-collapse" onClick={handleToggleClick}>
            {/* hamburger icon */}
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* ternary: if showLinks state true then show, if false then null */}
          <ul className={`nav-links ${showLinks ? 'show' : ''}`}>
            <li className="nav-link">
              <Link
                activeClass="active"
                to="home"
                spy={true}
                offset={-70}
                duration={300}
              >
                Home
              </Link>
            </li>
            <li className="nav-link">
              <Link
                activeClass="active"
                to="about"
                spy={true}
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
                offset={-70}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;