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
                    <div className="list-number">00</div>
                    <div className="list-text">Vasilios Georgoudis</div>
                  </a>
                </li>
                <li className="sidebar__navigation-list-item">
                  <a href="#">
                    <div className="list-number">01</div>
                    <div className="list-text">What I do</div>
                  </a>
                </li>
                <li className="sidebar__navigation-list-item">
                  <a href="#">
                    <div className="list-number">02</div>
                    <div className="list-text">How I do it</div>
                  </a>
                </li>
                <li className="sidebar__navigation-list-item"><a href="#">
                    <div className="list-number">03</div>
                    <div className="list-text">More Skills</div>
                  </a>
                </li>
                <li className="sidebar__navigation-list-item">
                  <a href="#">
                    <div className="list-number">04</div>
                    <div className="list-text">Contact Me</div>
                  </a>
                </li>
            </ul>
        </div> 
      </div>
    );
  }
}

export default Sidebar;