import React, { Component } from 'react';
import './Sidebar.css';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar__wrapper">
            <ul className="sidebar__wrapper-list">
                <li className="sidebar__wrapper-list-item">00</li>
                <li className="sidebar__wrapper-list-item">01</li>
                <li className="sidebar__wrapper-list-item">02</li>
                <li className="sidebar__wrapper-list-item">03</li>
                <li className="sidebar__wrapper-list-item">04</li>
            </ul>
        </div>
        <div className="sidebar__navigation">
            <ul className="sidebar__navigation-list">
                <li className="sidebar__navigation-list-item">Vasilios Georgoudis</li>
                <li className="sidebar__navigation-list-item">What I Do</li>
                <li className="sidebar__navigation-list-item">How I Do It</li>
                <li className="sidebar__navigation-list-item">More Skills</li>
                <li className="sidebar__navigation-list-item">Contact Me</li>
            </ul>
        </div> 
      </div>
    );
  }
}

export default Sidebar;