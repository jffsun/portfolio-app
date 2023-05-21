import React, { useState } from 'react';

const Project = ({ imageSrc, title, technologies, description }) => {
  
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
      <img className="project-image" src={imageSrc} alt={title} />
      {/* conditionally renders overlay if isHovered state is truthy */}
      {isHovered && (
        <div className="project-overlay">
          <h3 className="project-title">{title}</h3>
          <p className="project-technologies">{technologies}</p>
          <button className="learn-more-button">Learn More</button>
        </div>
      )};
    </div>
  );
};

export default Project;