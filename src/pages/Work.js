import React, { useState } from 'react';
import Project from '../components/Project'

const projects = [
  {
    id: 1,
    title: 'Teacher\'s Pet',
    description: 'Description for Project 1',
    technologies: 'SQL / JavaScript / Bootstrap',
    image: 'teachers-pet.png',
    screenshot: '' ,
    github: 'https://github.com/jffsun/teachers-pet',
  },
  {
    id: 2,
    title: 'Doggy Daycare',
    description: 'Description for Project 2',
    technologies: 'MongoDB / React.js / JavaScript',
    image: 'doggy-daycare.png',
    screenshot: '' ,
    github: 'https://github.com/jffsun/doggy-daycare',
  },
  {
    id: 3,
    title: 'Train Track (In Progress)',
    description: 'Description for Project 3',
    technologies: 'SQL / React.js / JavaScript',
    image: 'train-track.png',
    screenshot: '' ,
    github: 'https://github.com/jffsun/train-track',
  },
];


const Work = () => {
  // keeps track of selected project
  const [selectedProject, setSelectedProject] = useState(null);

  // keeps track of whether modal is open or closed
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  // updates selectedProject and opens Modal
  const handleLearnMore = (project) => {
    // update selectedProject state in parent Work.js component 
    setSelectedProject({ image, title, technologies, description })

    // update isModalOpen state to true to open modal
    setIsModalOpen(true);
  };

  return (
    <div className="work-container" id="work">
      <h2 className="work-header">Work</h2>
      <div className="all-projects-container">
        {/* iterate through each project in projects array */}
        {projects.map((project) => (
          // pass project's details into Project.js component
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            image={require(`../images/${project.image}`)}
            handleLearnMore={()=> handleLearnMore(project)}
          />
        ))}
        {/* if isModalOpen truthy then render modal */}
        {isModalOpen && (
          <Modal
            // passes entire selectedProject state variable to Modal.js
            project={selectedProject}

            // pass closeModal function so it can update isModal state in parent
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
};

export default Work;
