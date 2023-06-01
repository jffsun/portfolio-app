import React, { useEffect } from 'react';
import '../styles/Dialog.css'

const Dialog = ({ id, screenshot, title, description, github, url, isOpen, onClose }) => {

  // function calling the callback function passed down
  const closeDialog = () => {
     onClose();
  }

  // // runs after rendering and rerendering dialog component
  // useEffect(() => {
    
  //   // detects click inside document and if outside dialog, then close dialog
  //   const handleClickOutside = (event) => {
  //     const dialogContainer = document.getElementById(id);
  //     if (dialogContainer && !dialogContainer.contains(event.target)) {
  //       closeDialog();
  //     }
  //   };

  //   if (isOpen) {
  //     document.addEventListener("click", handleClickOutside);
  //   } else {
  //     document.removeEventListener("click", handleClickOutside); 
  //   } 
  //   // runs "clean up" function before effect is reached
  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // // runs useEffect hook when isOpen, id,
  // }, [isOpen, id, closeDialog]);
  
  return (
    <div className="dialog-overlay">
      <div className="dialog-content" id={id}>
        <img 
            className="dialog-screenshot" 
            src={require(`../images/${screenshot}`)} 
            alt={`${title}-screenshot`}
        />
        <h2>{title}</h2>
        <p>{description}</p>
        <button>
          <a href={github}>Github</a>
        </button>
        <button>
          <a href={url}>Visit Site</a>
        </button>
        <button onClick={onClose}> Close</button>
      </div>
    </div>
  );
};

export default Dialog;