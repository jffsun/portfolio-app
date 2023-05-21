import React from 'react';
import Project from '../components/Project'

const projects = [
  {
    id: 1,
    title: 'Teacher\'s Pet',
    description: 'Description for Project 1',
    technologies: 'SQL / JavaScript / Bootstrap',
    image: 'teachers-pet.png',
  },
  {
    id: 2,
    title: 'Doggy Daycare',
    description: 'Description for Project 2',
    technologies: 'MongoDB / React.js / JavaScript',
    image: 'doggy-daycare.png',
  },
  {
    id: 3,
    title: 'Train Track (In Progress)',
    description: 'Description for Project 3',
    technologies: 'SQL / React.js / JavaScript',
    image: 'train-track.png',
  },
];

const Work = () => {
  return (
    <div className="work-container" id="work">
      <h2 className="work-header">Work</h2>
      <div className="all-projects-container">
        {/* iterate through projects array */}
        {projects.map((project) => (
          // pass props into Project component
          <Project
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            image={require(`../images/${project.image}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Work;
