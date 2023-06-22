import React from 'react';
import '../styles/About.css';

const About = () => {
  return (

    <div className="about-container" id="about">
      <div className="about-header">
        <h2>about.</h2>
      </div>
      <div className="about-content">
        <div className="about-text">
          <div className="about-blurb">
            <p>
              I'm a Full Stack Web Developer who loves creating user-friendly applications with a clean design.
            </p>
            <ul>
              <li>
                Coding bootcamp graduate of UC Irvine
              </li>
              <li>
                AWS Cloud Practitioner Certified
              </li>
              <li>
                Strong passion for continuous learning
              </li>
              <li>
                Always excited to tackle new challenges!
              </li>
            </ul>
          </div>
          <div className="about-blurb">
            <h3>Technologies</h3>
            <p>Python, JavaScript, React, Redux, Express.js, Node.js, MySQL, MongoDB.{/* Logos for each side by side with hover squiggle */}</p>
          </div>
          <div className="about-blurb">
            <h3>Other</h3>
            <p>I love working out, listening to science podcasts, and trying new foods!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;