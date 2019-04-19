import React, { Component } from 'react';
import './Vasilis.css';
import profilePicture from './vasilis3@0,33x.png';

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