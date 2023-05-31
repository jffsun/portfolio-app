import React, { useState, useEffect } from 'react';
import Project from '../components/Project'
import Dialog from '../components/Dialog'

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

  const openDialog = (projectId) => {
    setSelectedProject(projectId);
  }

  const closeDialog = () => {
    setSelectedProject(null);
  }

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
            openDialog={openDialog}
            />
        ))}
        {selectedProject && (
        <Dialog
          // if selectedProject truthy with an id, find project's properties array based on id
          id={projects.find((project) => project.id === selectedProject).id}
          title={projects.find((project) => project.id === selectedProject).title}
          screenshot={projects.find((project) => project.id === selectedProject).screenshot}
          description={projects.find((project) => project.id === selectedProject).description}
          onClose={closeDialog}
        />
      )}
      </div>
    </div>
  );
};

export default Work;
