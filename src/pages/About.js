import React from 'react';

const About = () => {
  return (
    <div className="about-container" id="about">
      <div className="about-header">
        <h2>About Me</h2>
      </div>
      <div className="about-content">
      <h3>Who am I?</h3>
        <p>
          {/* Certificate / graduation logo */}
          Full Stack Developer and recent graduate of University of California, Irvine's Coding Bootcamp.
        </p>
        <p>
          Diverse professional background of Finance and Human Resources provides me a unique combination of technical and business skills.
        </p>
        <h3>Front-end & Back-end Technologies</h3>
        <p>
          Python, JavaScript, HTML, CSS, React, Redux, jQuery, SQL, MongoDB, Node.js, Express.js
          {/* Insert logos for each side by side */}
        </p>
        <h3>
          What am I doing right now?
        </h3>
        <p>
          Pursuing AWS Cloud Practitioner certification
        </p>
        <p>
          Actively seeking new career opportunities (Open to relocate for the right opportunity)
        </p>
        <h3>What do I do when I'm not coding?</h3>
        <p>
          Lift weights in the gym, take my dog Raven on walks, listen to neuroscience podcasts, and run on trails as I train for my first marathon!
          {/* Animation of brain training / working out */}
        </p>
      </div>
    </div>
  );
};

export default About;