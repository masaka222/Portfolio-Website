import React, { Component } from 'react';
import './MoreSkills.css';
import profilePicture from './me-drawing.png';

class MoreSkills extends Component {
  render() {
    return (
      <div className="more-skills">
        <img src={profilePicture} className="main__picture"></img>
      </div>
    );
  }
}

export default MoreSkills;