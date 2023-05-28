import React from 'react';

const Modal = ({ project, closeModal }) => {

  return (
    <div className="modal">
      <h3>{project.title}</h3>
      {/* TO DO: Screenshot image */}
      <img className="project-screenshot" 
      src={project.screenshot} 
      alt={`${project.title} screenshot`}/>
      <p>{project.technologies}</p>
      <p>{project.description}</p>
      <button onClick={closeModal}>Close</button>
    </div>
  )
}

export default Modal;