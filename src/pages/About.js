import React from 'react';

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-header">
        <h2>About Me</h2>
      </div>
      <div className="about-content">
        <p>
          Full Stack Developer with a background in Finance and Human Resources 
          which provides me with a unique combination of technical and business skills.
        </p>
        <p>
          Recent graduate of University of California, Irvine's Coding Bootcamp, where I 
          acquired key skills for front-end and back-end development and coded web 
          applications both independently and collaboratively.
          {/* Certificate / graduation logo */}
        </p>
        <h3>Technologies</h3>
        <p>
          JavaScript, HTML, CSS, React, SQL, MongoDB, Node.js, Apollo Server & GraphQL.
          {/* Insert logos for each side by side */}
        </p>
        <h3>
          What am I up to now?
        </h3>
          <p>
            Actively seeking new career opportunities and willing to relocate for the right opportunity.
          </p>
          <p>
            Pursuing my AWS Cloud Practitioner certification
          </p>
        <h3>When I'm not coding</h3>
        <p>
          You can find me in the gym, listening to neuroscience podcasts, or on the trails training for my first marathon!
          {/* Animation of brain training / working out */}
        </p>
      </div>
    </div>
  );
};

export default About;
