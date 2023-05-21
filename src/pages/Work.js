import React from 'react';
import Project from '../components/Project'

const projects = [
  {
    id: 1,
    title: 'Project 1',
    description: 'Description for Project 1',
    technologies: 'Technologies for Project 1',
    image: 'project1.jpg',
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description for Project 2',
    technologies: 'Technologies for Project 2',
    image: 'project2.jpg',
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Description for Project 3',
    technologies: 'Technologies for Project 3',
    image: 'project3.jpg',
  },
];

const Work = () => {
  return (
    <div className="work-container" id="work">
      {/* iterate through projects array */}
      {projects.map((project) => (
        // pass props into Project component
        <Project
          key={project.id}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          image={project.image} 
        />
      ))}
    </div>
  );
};

export default Work;
