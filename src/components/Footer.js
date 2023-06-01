import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/Footer.css"

const Footer = () => {

  // hide scroll-to-top button initially
  const [showButton, setShowButton] = useState(false);

  // useEffect hook to run side effect code after footer is mounted
  useEffect(() => {
    // app listens for user scrolling and runs handleScroll func
    window.addEventListener("scroll", handleScroll);
    
    // remove event listener after handleScroll func is run
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

  // if window passes 300 pixel threshold update showButton state
  const handleScroll = () => {
    if(window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  }

  // scroll to top if scroll-to-top button clicked
  const handleButtonClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <div>
      {/* button always show at bottom of viewport */}
      <footer className="fixed-bottom">
        {/* full-width container spanning entire width of viewport */}
        <div className="container-fluid">
            <div className="row">
              <div className="col text-center">
                {/* if showButton true, show scroll-to-top button */}
                {showButton && (
                  <button
                    className="btn btn-light btn-lg rounded-circle shadow"
                    onClick={handleButtonClick}
                  >
                    <FontAwesomeIcon icon={faArrowCircleUp} size="2x" />
                  </button>
                )}
              </div>
            </div>
          </div>
      </footer>
    </div>
  );
};

export default Footer;