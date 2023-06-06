import React from 'react';
import '../styles/About.css';

const About = () => {
  return (

    <div className="about-container" id="about">
      <div className="about-header">
        <h2>About.</h2>
      </div>
      <div className="about-content">
        <div className="about-text">
          <div className="about-blurb">
            <p>{/* Certificate / graduation logo */} I am a Full Stack Developer and recent graduate of University of California, 
            Irvine's Coding Bootcamp. I have self-starter mentality with a strong passion for continuous learning. Coming from 
            the world of Finance and Human Resources provides me a unique combination of technical and business skills. 
            </p>
          </div>
          <div className="about-blurb">
            <h3>Technologies</h3>
            <p>Python, JavaScript, React, Redux, Express.js, Node.js, MySQL, MongoDB.{/* Logos for each side by side with hover squiggle */}</p>
          </div>
          <div className="about-blurb">
            <h3>Right Now</h3>
            <p>Pursuing AWS Cloud Practitioner certification{/* AWS Logo */}</p>
            <p>Actively seeking new career opportunities</p>
          </div>
          <div className="about-blurb">
            <h3>Outside of Coding</h3>
            <p>I love bodybuilding, science podcasts, and trying new restaurants. I am also currently training for my first marathon!{/* Animation of brain running */}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;