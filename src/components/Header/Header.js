import React, { Component } from 'react';
import './Header.css';
import linkedin from './linkedin-logo.png';
import github from './github-logo.png';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="logo">
          <div className="logo__text">
            <p>Vasilis</p>
            <p>Georgoudis</p>
          </div>
        </div>
        <div className="center_navigation">
          <a> About </a>
          <a> Work </a>
        </div>
        <div className="social">
          <img src={linkedin} className="social__linkedin"></img>
          <img src={github} className="social__github"></img>
        </div>
      </header>
    );
  }
}

export default Header;