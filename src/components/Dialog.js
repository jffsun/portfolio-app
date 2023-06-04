import React, { useEffect } from 'react';
import '../styles/Dialog.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Dialog = ({ id, screenshot, title, description, github, url, isOpen, onClose }) => {
  
  return (
    <div className="dialog-overlay">
      <div className="dialog-content" id={id}>
        <div className="close-button-container">
          <button 
            id="close-button" 
            onClick={onClose}>
            <FontAwesomeIcon icon={faX}/>
          </button>
        </div>
        <img 
            className="dialog-screenshot" 
            src={require(`../images/${screenshot}`)} 
            alt={`${title}-screenshot`}
        />
        <div className="dialog-title">
          <h2>{title}</h2>
        </div>
        <div className="dialog-description"> 
          <p>{description}</p>
        </div>
        <div className="dialog-buttons-container">
          <div className="dialog-buttons-links">
            <button id="site-button">
              <a 
                href={url}
                rel="noreferrer"
                target="_blank">
                View Site
              </a>
            </button>
            <button id="github-button">
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