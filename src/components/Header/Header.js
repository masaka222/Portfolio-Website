import React, { Component } from 'react';
import './Header.css';
import linkedin from './linkedin-logo.png';
import github from './github-logo.png';

class Header extends Component {
  render() {
    return (
      <header className="header">

        <div className="logo-container">
          <div className="logo">
            <div className="logo__text">
              <p>Vasilis</p>
              <p>Georgoudis</p>
            </div>
          </div>
        </div>
        
        <div className="center_navigation">
          <a href="#" className="center_navigation__about headernav-active"> About </a>
          <a href="#" className="center_navigation__work"> Work </a>
        </div>

        <div className="social">
          <a href="https://www.linkedin.com/in/vasilis-georgoudis-69211971/" target="_blank"><img src={linkedin} className="social__linkedin"></img></a>
          <a href="https://github.com/masaka222" target="_blank"> <img src={github} className="social__github"></img></a>
        </div>
      </header>
    );
  }
}

export default Header;