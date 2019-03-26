import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends Component {

  /* This function gives the class of active when the list item is indeed active*/
  getActiveClass = (path) => {
    return this.props.location.pathname === path ? "active" : " "
  }

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar__navigation">
            <ul className="sidebar__navigation-list">
                <li className = {"sidebar__navigation-list-item " + this.getActiveClass("/")}>
                  <NavLink exact to="/">
                    <div className = "list-number">00</div>
                    <div className = {"list-text "+ this.getActiveClass("/")}>Vasilios Georgoudis</div>
                  </NavLink>
                </li>
                <li className = {"sidebar__navigation-list-item " + this.getActiveClass("/bio")}>
                  <NavLink exact to="/bio">
                    <div className = "list-number">01</div>
                    <div className = {"list-text "+ this.getActiveClass("/bio")}>What I do</div>
                  </NavLink>
                </li>
                <li className = {"sidebar__navigation-list-item " + this.getActiveClass("/skills")}>
                  <NavLink exact to="/skills">
                    <div className = "list-number">02</div>
                    <div className = {"list-text "+ this.getActiveClass("/skills")}>How I do it</div>
                  </NavLink>
                </li>
                <li className={"sidebar__navigation-list-item " + this.getActiveClass("/moreskills")}>
                  <NavLink exact to="/moreskills">
                    <div className = "list-number">03</div>
                    <div className = {"list-text "+ this.getActiveClass("/moreskills")}>More Skills</div>
                  </NavLink>
                </li>
                <li className={"sidebar__navigation-list-item " + this.getActiveClass("/contact")}>
                  <NavLink exact to="/contact">
                    <div className = "list-number">04</div>
                    <div className = {"list-text "+ this.getActiveClass("/contact")}>Contact Me</div>
                  </NavLink>
                </li>


            </ul>
        </div> 
      </div>
    );
  }
}

Sidebar = withRouter(Sidebar);

export default Sidebar;