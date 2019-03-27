import React, { Component } from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends Component {

  /* This function gives the class of active when the list item is indeed active*/
  getActiveClass = (path) => {
    return this.props.location.pathname === path ? "active" : " "
  }

  checkTest = () => {
    this.props.location.pathname = '/bio';
  }
  /* Checks if up or down arrow keys are pressed to navigate with buttons */
  checkKeyPress = (key) => {
    if(key.keyCode == '38'){
      //this.checkTest();
      this.props.history.push('/');
      console.log('up was pressed');
    }
    if(key.keyCode == '40'){
      this.props.history.push('/bio');
      console.log('down was pressed');
    }
  }

  render() {
    /* Checks if up or down arrow keys are pressed to navigate with buttons */
    window.addEventListener("keydown", this.checkKeyPress, false);
  /*
    function checkKeyPress(key) {
      if(key.keyCode == '38'){
        //this.location.pathname = '/';
        //this.transitionTo('/bio');
        //this.history.push('/contact');
        console.log('up was pressed');
      }
      if(key.keyCode == '40'){
        this.location.pathname = '/bio';
        console.log('down was pressed');
      }
    }*/
    
    return (
      
      <div className="sidebar">
        <div className="sidebar__navigation">
            <ul className="sidebar__navigation-list">
                <li className = {"sidebar__navigation-list-item " + this.getActiveClass("/")}>
                  <Link exact to="/">
                    <div className = "list-number">00</div>
                    <div className = {"list-text "+ this.getActiveClass("/")}>Vasilis Georgoudis</div>
                  </Link>
                </li>
                <li className = {"sidebar__navigation-list-item " + this.getActiveClass("/bio")}>
                  <Link exact to="/bio">
                    <div className = "list-number">01</div>
                    <div className = {"list-text "+ this.getActiveClass("/bio")}>What I do</div>
                  </Link>
                </li>
                <li className = {"sidebar__navigation-list-item " + this.getActiveClass("/skills")}>
                  <Link exact to="/skills">
                    <div className = "list-number">02</div>
                    <div className = {"list-text "+ this.getActiveClass("/skills")}>How I do it</div>
                  </Link>
                </li>
                <li className={"sidebar__navigation-list-item " + this.getActiveClass("/moreskills")}>
                  <Link exact to="/moreskills">
                    <div className = "list-number">03</div>
                    <div className = {"list-text "+ this.getActiveClass("/moreskills")}>More Skills</div>
                  </Link>
                </li>
                <li className={"sidebar__navigation-list-item " + this.getActiveClass("/contact")}>
                  <Link exact to="/contact">
                    <div className = "list-number">04</div>
                    <div className = {"list-text "+ this.getActiveClass("/contact")}>Contact Me</div>
                  </Link>
                </li>


            </ul>
        </div> 
      </div>
    );
  }
}
/* In order to have history and location in my component's props */
Sidebar = withRouter(Sidebar);

export default Sidebar;