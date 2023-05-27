import React, { useState } from 'react';
import Project from '../components/Project'
import Modal from '../components/Modal'

// arrays holds project details
const projects = [
  {
    id: 1,
    title: 'Teacher\'s Pet',
    description: 'Description for Project 1',
    technologies: 'SQL / JavaScript / Bootstrap',
    image: 'teachers-pet.png',
    screenshot: 'teachers-pet.png' ,
    github: 'https://github.com/jffsun/teachers-pet',
  },
  {
    id: 2,
    title: 'Doggy Daycare',
    description: 'Description for Project 2',
    technologies: 'MongoDB / React.js / JavaScript',
    image: 'doggy-daycare.png',
    screenshot: 'teachers-pet.png' ,
    github: 'https://github.com/jffsun/doggy-daycare',
  },
  {
    id: 3,
    title: 'Train Track (In Progress)',
    description: 'Description for Project 3',
    technologies: 'SQL / React.js / JavaScript',
    image: 'train-track.png',
    screenshot: 'teachers-pet.png' ,
    github: 'https://github.com/jffsun/train-track',
  },
];

const Work = () => {
  // state keeps track of selected project
  const [selectedProject, setSelectedProject] = useState(null);

  // state keeps track of whether modal is open or closed
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  // callback function that updates selectedProject state with selected project's details and opens modal
  const handleLearnMore = (project) => {

    // destructuring assignment on project object to extract properties
    const { screenshot, title, technologies, description } = project;

    // update the selectedProject state with these properties
    setSelectedProject({ screenshot, title, technologies, description });

    openModal();
  };

  return (
    <div className="work-container" id="work">
      <h2 className="work-header">Work</h2>
      <div className="all-projects-container">
        {projects.map((project) => (

          // for each project render a project component with their details
          <Project
            key={project.id}
            title={project.title}
            technologies={project.technologies}
            image={require(`../images/${project.image}`)}

            // pass handleLearnMore as prop to project project component can update selectedProject state
            handleLearnMore={() => handleLearnMore(project)}
            />
        ))}
        {/* if modal state open then render */}
        {isModalOpen && (
          <Modal
            // pass selected project state var as prop to modal child component
            project={selectedProject}
            // pass closeModal func so modal child component can close itself
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
};

export default Work;
