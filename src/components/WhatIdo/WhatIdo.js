import React, { Component } from 'react';
import './WhatIdo.css';
import profilePicture from './me-drawing.png';

class WhatIdo extends Component {
  render() {
    return (
      <div className="what-I-do">
        <img src={profilePicture} className="main__picture"></img>
      </div>
    );
  }
}

export default WhatIdo;