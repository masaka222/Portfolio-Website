import React, { Component } from 'react';
import './Main.css';
import Sidebar from '../Sidebar/Sidebar';
import profilePicture from './me-drawing.png';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Sidebar/>
        <img src={profilePicture} className="main__picture"></img>
      </div>
    );
  }
}

export default Main;