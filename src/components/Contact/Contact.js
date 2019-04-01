import React, { Component } from 'react';
import './Contact.css';
import profilePicture from './me-drawing.png';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className='contact__text'> 
          <h4  className='contact__text-small-title'> Contact Me</h4>
          <h2  className='contact__text-big-title'> My mom is proud of my work </h2>
          <h2  className='contact__text-big-title'> You will be too! </h2>
          <div  className = 'contact__text-paragraph'>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            <p> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
          </div>
        </div>

        <img src={profilePicture} className="contact__picture"></img>
      </div>
    );
  }
}

export default Contact;