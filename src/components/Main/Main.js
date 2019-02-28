import React, { Component } from 'react';
import './Main.css';
import Sidebar from '../Sidebar/Sidebar';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <Sidebar/>
      </div>
    );
  }
}

export default Main;