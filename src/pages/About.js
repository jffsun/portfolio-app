import React from 'react';
import '../styles/About.css';

const About = () => {
  return (

    <div className="about-container" id="about">
      <div className="about-header">
        <h2>About.</h2>
      </div>
      <div className="about-content">
      <div className="about-blurb">
        <h3>About me</h3>
        <p>{/* Certificate / graduation logo */} Full Stack Developer and recent graduate of University of California, Irvine's Coding Bootcamp.</p>
        <p> Diverse professional background of Finance and Human Resources provides me a unique combination of technical and business skills.</p>
      </div>
      <div className="about-blurb">
        <h3>Technologies</h3>
        <p>Python, JavaScript, HTML, CSS, React, Redux, jQuery, SQL, MongoDB, Node.js, Express.js{/* Logos for each side by side with hover squiggle */}</p>
      </div>
      <div className="about-blurb">
        <h3>Right now</h3>
        <p>Pursuing AWS Cloud Practitioner certification{/* AWS Logo */}</p>
        <p>Actively seeking new career opportunities (Open to relocate for the right opportunity)</p>
      </div>
      <div className="about-blurb">
        <h3>Outside of coding</h3>
        <p>I enjoy bodybuilding, neuroscience podcasts, and am training for my first marathon!{/* Animation of brain running */}
        </p>
      </div>
      </div>
    </div>
  );
};

export default About;