import React, { Component } from 'react';
import './Vasilis.css';
import profilePicture from './me-drawing.png';

class Vasilis extends Component {
  render() {
    return (
      <div className="vasilis">
        <img src={profilePicture} className="vasilis__picture"></img>
      </div>
    );
  }
}

export default Vasilis;