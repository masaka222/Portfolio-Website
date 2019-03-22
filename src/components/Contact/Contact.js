import React, { Component } from 'react';
import './Contact.css';
import profilePicture from './me-drawing.png';

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <img src={profilePicture} className="main__picture"></img>
      </div>
    );
  }
}

export default Contact;