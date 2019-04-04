import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends Component {

  /* This function gives the class of active when the list item is indeed active*/
  getActiveClass = (path) => {
    return this.props.location.pathname === path ? "active" : " "
  }

  checkTest = () => {
    this.props.location.pathname = '/bio';
  }
  /* Checks if up or down arrow keys are pressed to navigate with buttons OR
      if you scroll to navigate with scrolling */
  checkKeyPress = (key) => {
    /* When you press the up arrow key OR scroll down, if for example you are on the /contact page, you're gonna navigate to
       the moreskills page next. */
    if(key.keyCode == '38' || key.deltaY < -50){
      switch(this.props.location.pathname){
        case '/contact':
          this.props.history.push('/moreskills');
          /* I stop the scroll event from happening right after */
          window.removeEventListener("wheel", this.checkKeyPress);
          /* And resume it after some time */
          setTimeout(()=>{
            window.addEventListener("wheel", this.checkKeyPress);
          },700);
          break;
        case '/moreskills':
          this.props.history.push('/skills');
          window.removeEventListener("wheel", this.checkKeyPress);
          setTimeout(()=>{
            window.addEventListener("wheel", this.checkKeyPress);
          },700);
          break;
        case '/skills':
          this.props.history.push('/bio');
          window.removeEventListener("wheel", this.checkKeyPress);
          setTimeout(()=>{
            window.addEventListener("wheel", this.checkKeyPress);
          },700);
          break;
        case '/bio':
          this.props.history.push('/');
          window.removeEventListener("wheel", this.checkKeyPress);
          setTimeout(()=>{
            window.addEventListener("wheel", this.checkKeyPress);
          },700);
          break;
      }
    }
    /* The same for the down arrow key */
    if(key.keyCode == '40' || key.deltaY > 50){
      switch(this.props.location.pathname){
        case '/':
          this.props.history.push('/bio');
          window.removeEventListener("wheel", this.checkKeyPress);
          setTimeout(()=>{
            window.addEventListener("wheel", this.checkKeyPress);
          },700);
          break;
        case '/bio':
          this.props.history.push('/skills');
          window.removeEventListener("wheel", this.checkKeyPress);
          setTimeout(()=>{
            window.addEventListener("wheel", this.checkKeyPress);
          },700);
          break;
        case '/skills':
          this.props.history.push('/moreskills');
          window.removeEventListener("wheel", this.checkKeyPress);
          setTimeout(()=>{
            window.addEventListener("wheel", this.checkKeyPress);
          },700);
          break;
        case '/moreskills':
          this.props.history.push('/contact');
          window.removeEventListener("wheel", this.checkKeyPress);
          setTimeout(()=>{
            window.addEventListener("wheel", this.checkKeyPress);
          },700);
          break;
      }
    }
  }


  render() {
    /* Checks if any key is pressed */
    window.addEventListener("keydown", this.checkKeyPress, false);
    // When the user scrolls down 80px from the top of the document, call the scrollFunction()
    //document.getElementById("main").addEventListener("wheel", scrollFunction2);
    window.addEventListener("wheel", this.checkKeyPress);
    
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