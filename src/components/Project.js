import React, { useState } from 'react';

const Project = ({ title, technologies, image, handleLearnMore }) => {
  
  // state keeps track of project being hovered
  const [isHovered, setIsHovered] = useState(false);

  // update isHovered state to show overlay when hovered
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  // update isHovered state to hide overlay when not hovered
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="project-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>

      {/* image and title were passed as prop from parent component */}
      <img className="project-image" src={image} alt={title}/>

      {/* conditionally render overlay depending on isHovered state */}
      {isHovered && (
        <div className="project-overlay">
          <h3 className="project-title">{title}</h3>
          <h4 className="project-technologies">{technologies}</h4>

          {/* updates selectedProject state and isModalOpen in parent component */}
          <button className="learn-more-button" onClick={handleLearnMore}>Learn More</button>
        </div>
      )}
    </div>
  );
};

export default Project;