import React, { Component } from 'react';
import './HowIdoIt.css';
import profilePicture from './me-drawing.png';

class HowIdoIt extends Component {
  render() {
    return (
      <div className="how-I-do-it">
        <img src={profilePicture} className="main__picture"></img>
      </div>
    );
  }
}

export default HowIdoIt;