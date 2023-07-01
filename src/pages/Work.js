import React, { useState } from 'react';
import Project from '../components/Project'
import Dialog from '../components/Dialog'
import '../styles/Work.css'

// arrays holds project details
const projects = [
  {
    id: 1,
    title: 'Teacher\'s Pet',
    description: 'Parent-teacher portal allows parents to upload student information for teachers. Teachers can post important school announcements and updates for parents.',
    technologies: 'Express.js / Node.js / MySQL',
    image: 'teachers-pet.png',
    screenshots: [
      {
        image:'teachers-pet-screenshot-one.png',
        alt: 'teachers-pet-screenshot-1'
      },
      {
        image:'teachers-pet-screenshot-two.png',
        alt: 'teachers-pet-screenshot-2'
      },
      {
        image:'teachers-pet-screenshot-three.png',
        alt: 'teachers-pet-screenshot-3'
      }
    ],
    github: 'https://github.com/jffsun/teachers-pet',
  },
  {
    id: 2,
    title: 'Doggy Daycare',
    description: 'Web application allows users to book pet services and interfaces with a calendar API to render customers\' booked services.',
    technologies: 'React / Apollo Server / GraphQL / MongoDB',
    image: 'doggy-daycare.png',
    screenshots: [
      {
        image:'teachers-pet-screenshot-one.png',
        alt: 'teachers-pet-screenshot-1'
      },
      {
        image:'teachers-pet-screenshot-two.png',
        alt: 'teachers-pet-screenshot-2'
      },
      {
        image:'teachers-pet-screenshot-three.png',
        alt: 'teachers-pet-screenshot-3'
      }
    ],
    github: 'https://github.com/jffsun/teachers-pet',
  },
  {
    id: 3,
    title: 'Train Track (In Progress)',
    description: 'Gym book web application allows users to build workouts with various exercises. Users can then log exercise data such as weight, number of sets, and number of reps to track their training progress.',
    technologies: 'React / MySQL',
    image: 'train-track.png',
    screenshots: [
      {
        image:'teachers-pet-screenshot-one.png',
        alt: 'teachers-pet-screenshot-1'
      },
      {
        image:'teachers-pet-screenshot-two.png',
        alt: 'teachers-pet-screenshot-2'
      },
      {
        image:'teachers-pet-screenshot-three.png',
        alt: 'teachers-pet-screenshot-3'
      }
    ],    
    github: 'https://github.com/jffsun/train-track',
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
        <h2>work.</h2>
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
          screenshots={projects.find((project) => project.id === selectedProject).screenshots}
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
