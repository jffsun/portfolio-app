import React, { useState } from 'react';

const Project = ({ project, openDialog }) => {
  
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
    
    <div 
      className="project-container" 
      id={`project-${project.id}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <img 
        className="project-image" 
        src={require(`../images/${project.image}`)} 
        alt={project.title}
      />

      {/* conditionally render overlay depending on isHovered state */}
      {isHovered && (
        <div className="project-overlay">
          <h3 className="project-title">{project.title}</h3>
          <h4 className="project-technologies">{project.technologies}</h4>

          {/* updates selectedProject isModalOpen state */}
          <button className="learn-more-button" onClick={() => openDialog(project.id)}>Learn More</button>
        </div>
      )}
    </div>
  );
};

export default Project;