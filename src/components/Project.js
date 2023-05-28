import React, { useState, useEffect } from 'react';
import Modal from './Modal'

const Project = ({ project }) => {
  
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

  // state keeps track of selected project
  const [selectedProject, setSelectedProject] = useState(null);

  // state keeps track of whether modal is open or closed
  const [isModalOpen, setIsModalOpen] = useState(false);

  // const openModal = () => {
  // }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  // callback function that updates selectedProject state with selected project's details and opens modal
  const handleLearnMore = (project) => {

    // update selectedProject with shallow copy of current project's details 
    setSelectedProject(Object.assign({}, project));
    setIsModalOpen(true);
  };

  useEffect(() => {
    console.log('isModalOpen:', isModalOpen);
  }, [isModalOpen]);

  return (
    
    <div className="project-container" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
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
          <button className="learn-more-button" onClick={handleLearnMore}>Learn More</button>
        </div>
      )}

      {isModalOpen && (
        <Modal
          // pass selected project state var as prop to modal child component
          project={project}
          closeModal={closeModal}
        />
      )}
    
    </div>
  );
};

export default Project;