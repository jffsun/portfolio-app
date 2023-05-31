import React, { useState, useEffect } from 'react';
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
    screenshot: 'teachers-pet-screenshot.png' ,
    github: 'https://github.com/jffsun/teachers-pet',
  },
  {
    id: 2,
    title: 'Doggy Daycare',
    description: 'Description for Project 2',
    technologies: 'MongoDB / React.js / JavaScript',
    image: 'doggy-daycare.png',
    screenshot: 'doggy-daycare-screenshot.png' ,
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

  // const openModal = () => {
  // }

  const closeModal = () => {
    setIsModalOpen(false);
  }

  // callback function that updates selectedProject state with selected project's details and opens modal
  const handleLearnMore = (project) => {

    // update selectedProject with shallow copy of current project's details 
    // setSelectedProject(Object.assign({}, project));
    setIsModalOpen(true);
  };

  useEffect(() => {
    console.log('isModalOpen:', isModalOpen);
  }, [isModalOpen]);


  return (
    <div className="work-container" id="work">
      <div className="work-header"> 
        <h2>Projects.</h2>
      </div>
      <div className="all-projects-container">
        {projects.map((project) => (
          // render each project component with their details
          <Project
            key={project.id}

            // image={require(`../images/${project.image}`)}
            project={project}
            handleLearnMore={handleLearnMore}
            />
        ))}
      </div>
      <div className="all-modals-container">
        {projects.map((project) => (
          // render each modal component with project details
          <Modal
            project={project}
            closeModal={closeModal}>
          </Modal>
        ))} 
      {/* {isModalOpen && (
          <Modal
            // pass selected project state var as prop to modal child component
            project={project}
            closeModal={closeModal}
          />
        )} */}
      </div> 
    </div>
  );
};

export default Work;
