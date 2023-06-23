import React, { useState } from 'react';
import '../styles/Project.css'

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
        src={require(`../assets/images/${project.image}`)} 
        alt={project.title}
      />

      {/* conditionally render overlay depending on isHovered state */}
      {isHovered && (
        <div className="project-overlay">
          <h2 className="project-title">{project.title}</h2>
          <h3 className="project-technologies">{project.technologies}</h3>

          {/* updates selectedProject isModalOpen state */}
          <button className="learn-more-button" onClick={() => openDialog(project.id)}>Learn More</button>
        </div>
      )}
    </div>
  );
};

export default Project;