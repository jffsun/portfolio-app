import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../styles/Contact.css'

const Contact = () => {

  const handleSubmit = (event) => {
    event.preventDefault();

    // get submitted values from form
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    const subject = `Message from ${name}`;
    const mailtoLink = `mailto:jeffreysun811@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`

    // open to user's default email client
    window.location.href = mailtoLink;
  }

  return (
    <div className="contact-container" id="contact">
      <div className="contact-header">
        <h2>contact</h2>
      </div>
      <div className="contact-content">
        <div className="contact-blurb">
          <p>I'm always looking to expand my professional network and explore new possibilities.</p>
        </div>
        <div className="contact-form-container">
          <h3 id="contact-question">Have a question or want to work together?</h3>
          <form className="contact-form">
            <input  
              name="name"
              id="name"
              type="text"
              placeholder="Name"
              required>
            </input>
            <textarea
              name="message"
              id="message"
              type="textarea"
              placeholder="Message"
              rows="5"
              required>
            </textarea>
            <button 
              type="submit"
              onClick={handleSubmit}>
              SUBMIT
            </button>
          </form>
          <p id="my-email">Email: jeffreysun811@gmail.com</p>
          <div className="social-buttons">
            <button id="social-github">
              <a 
                href="https://github.com/jffsun"
                rel="noreferrer"
                target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </button>
            <button id="social-linkedin">
              <a 
                href="https://www.linkedin.com/in/jeffrey-sun-175b37189/"
                rel="noreferrer"
                target="_blank">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </button>
            <button id="social-instagram">
              <a 
                href="https://www.instagram.com/jeff_sunn/?hl=en"
                rel="noreferrer"
                target="_blank">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;