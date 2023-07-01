import React, { useState } from 'react';
import '../styles/Dialog.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Dialog = ({ id, screenshots, title, description, github, onClose }) => {

  // index value that tracks which project screenshot user is seeing
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const totalScreenshots = screenshots.length;

  // function to handle cycling to the next screenshot
  const nextScreenshot = () => {
    setCurrentScreenshot((currentIndex) => (currentIndex + 1) % totalScreenshots);
  };

  // function to handle cycling to the previous screenshot
  const previousScreenshot = () => {
    setCurrentScreenshot((currentIndex) =>
    
      // if on first screenshot then update currentScreenshot to last screenshot in array
      currentIndex === 0 ? totalScreenshots - 1 : currentIndex - 1
    );
  }

  // destructure properties of current screenshot 
  const { image, alt } = screenshots[currentScreenshot];

  return (
    <div className="dialog-overlay">
      <div className="dialog-content" id={id}>
        <div className="close-button-container">
          <button 
            id="close-project-button" 
            onClick={onClose}>
            <FontAwesomeIcon icon={faX}/>
          </button>
        </div>
        <img 
            className="dialog-screenshot" 
            src={require(`../assets/images/${image}`)} 
            alt={alt}
        />
        <div className="dialog-buttons-arrows">
            <button onClick={previousScreenshot}>&lt;</button>
            <button onClick={nextScreenshot}>&gt;</button>
        </div>
        <div className="dialog-title">
          <h2>{title}</h2>
        </div>
        <div className="dialog-description"> 
          <p>{description}</p>
        </div>
        <div className="dialog-buttons-container">
          <div className="dialog-buttons-links">
            <button id="project-github-button">
              <a 
                href={github}
                rel="noreferrer"
                target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </button>
          </div>
        </div>
        </div>
    </div>
  );
};

export default Dialog;