import React from 'react';
import '../styles/main.css';

const Contact = () => {
  return (
    <div className="page-container">
      <h1>Contact Us</h1>
      <form className="contact-form">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;