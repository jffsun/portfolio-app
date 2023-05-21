import React, { useState } from 'react';

const Project = ({ image, title, technologies }) => {
  
  // state variables for project being hovered
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="project-container"
      // triggers handleMouseEnter() when mouse enters element
      onMouseEnter={handleMouseEnter}

      // triggers handleMouseLeave() when mouse leaves 
      onMouseLeave={handleMouseLeave}
    >
      <img className="project-image" src={image} alt={title}/>
      {/* conditionally renders overlay if isHovered state is truthy */}
      {isHovered && (
        <div className="project-overlay">
          <h3 className="project-title">{title}</h3>
          <h4 className="project-technologies">{technologies}</h4>
          <button className="learn-more-button">Learn More</button>
        </div>
      )}
    </div>
  );
};

export default Project;