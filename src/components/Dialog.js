import React from 'react';

const Dialog = ({ id, title, screenshot, description, closeDialog }) => {

  return (
    <div>
      <dialog className="dialog" id={id}>
        <h3>{title}</h3>
        <img className="project-screenshot" 
        src={screenshot} 
        alt={`${title} screenshot`}/>
        <p>{description}</p>
        <button onClick={closeDialog}>Close</button>
      </dialog>
    </div>
  )
}

export default Dialog;