import React from 'react';
import '../styles/Contact.css'

const Contact = () => {
  return (
    <div className="contact-container" id="contact">
      <div className="contact-header">
        <h2>Contact.</h2>
      </div>
      <div className="contact-content">
        <div className="contact-blurb">
          <p>I am always looking to expand my professional network and explore new possibilities in the world of software development.</p>

        </div>
        <div className="contact-form-container">
          <h3>Have a question or want to work together?</h3>
          <form className="contact-form">
            <input  
              name="name"
              id="name"
              type="text"
              placeholder="Name">
            </input>
            <input
              name="email"
              id="email" 
              type="email" 
              placeholder="Email">
            </input>
            <textarea
              name="message"
              id="message"
              type="textarea"
              placeholder="Message"
              rows="5">
            </textarea>
            <button 
              type="submit">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;
