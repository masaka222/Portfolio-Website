import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar__navigation">
            <ul className="sidebar__navigation-list">
                <li className="sidebar__navigation-list-item">
                  <a href="#">
                    <span className="list-black-bar"></span>
                    <h4 className="list-number">00</h4>
                    <h4 className="list-text">Vasilios Georgoudis</h4>
                  </a>
                </li>
                <li className="sidebar__navigation-list-item">
                  <a href="#">
                    <span className="list-black-bar"></span>
                    <h4 className="list-number">01</h4>
                    <h4 className="list-text">What I do</h4>
                  </a>
                </li>
                <li className="sidebar__navigation-list-item">
                  <a href="#">
                    <span className="list-black-bar"></span>
                    <h4 className="list-number">02</h4>
                    <h4 className="list-text">How I do it</h4>
                  </a>
                </li>
                <li className="sidebar__navigation-list-item"><a href="#">
                    <span className="list-black-bar"></span>
                    <h4 className="list-number">03</h4>
                    <h4 className="list-text">More Skills</h4>
                  </a>
                </li>
                <li className="sidebar__navigation-list-item">
                  <a href="#">
                    <span className="list-black-bar"></span>
                    <h4 className="list-number">04</h4>
                    <h4 className="list-text">Contact Me</h4>
                  </a>
                </li>
            </ul>
        </div> 
      </div>
    );
  }
}

export default Sidebar;