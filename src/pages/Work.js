import React from 'react';
import Project from '../components/Project'

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

  return (
    <div className="work-container" id="work">
      <h2 className="work-header">Work</h2>
      <div className="all-projects-container">
        {projects.map((project) => (

          // for each project render a project component with their details
          <Project
            key={project.id}

            // image={require(`../images/${project.image}`)}
            project={project}
            />
        ))}
      </div>
    </div>
  );
};

export default Work;
