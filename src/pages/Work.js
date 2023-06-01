import React, { useState } from 'react';
import Project from '../components/Project'
import Dialog from '../components/Dialog'
import '../styles/Work.css'

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
    url: 'https://www.placeholder.com'
  },
  {
    id: 2,
    title: 'Doggy Daycare',
    description: 'Description for Project 2',
    technologies: 'MongoDB / React.js / JavaScript',
    image: 'doggy-daycare.png',
    screenshot: 'doggy-daycare-screenshot.png' ,
    github: 'https://github.com/jffsun/doggy-daycare',
    url: 'https://www.placeholder.com'
  },
  {
    id: 3,
    title: 'Train Track (In Progress)',
    description: 'Description for Project 3',
    technologies: 'SQL / React.js / JavaScript',
    image: 'train-track.png',
    screenshot: 'teachers-pet.png' ,
    github: 'https://github.com/jffsun/train-track',
    url: 'https://www.placeholder.com'
  },
];

const Work = () => {

  // state keeps track of selected project
  const [selectedProject, setSelectedProject] = useState(null);
  const [isOpen, setIsOpen] = useState(false);


  const openDialog = (projectId) => {
    setSelectedProject(projectId);
    setIsOpen(true);
  }

  const closeDialog = () => {
    setSelectedProject(null);
    setIsOpen(false);
  }

  return (
    <div className="work-container" id="work">
      <div className="work-header"> 
        <h2>Work.</h2>
      </div>
      <div className="all-projects-container">
        {projects.map((project) => (
          // render each project component with their details
          <Project
            key={project.id}

            // image={require(`../images/${project.image}`)}
            project={project}
            openDialog={openDialog}
            />
        ))}
      </div>
        {selectedProject && (
        <Dialog
          // if selectedProject truthy with an id, find project's properties array based on id
          id={`dialog-${selectedProject}`}
          title={projects.find((project) => project.id === selectedProject).title}
          screenshot={projects.find((project) => project.id === selectedProject).screenshot}
          description={projects.find((project) => project.id === selectedProject).description}
          github={projects.find((project) => project.id === selectedProject).github}
          url={projects.find((project) => project.id === selectedProject).url}
          isOpen={isOpen}
          onClose={closeDialog}
        />
      )}
    </div>
  );
};

export default Work;
