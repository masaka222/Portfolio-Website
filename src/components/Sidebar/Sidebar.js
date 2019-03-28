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
  /* Checks if up or down arrow keys are pressed to navigate with buttons */
  checkKeyPress = (key) => {
    /* When you press the up arrow key, if for example you are on the /contact page, you're gonna navigate to
       the moreskills page next */
    if(key.keyCode == '38'){
      switch(this.props.location.pathname){
        case '/contact':
          this.props.history.push('/moreskills');
          break;
        case '/moreskills':
          this.props.history.push('/skills');
          break;
        case '/skills':
          this.props.history.push('/bio');
          break;
        case '/bio':
          this.props.history.push('/');
          break;
      }
    }
    /* The same for the down arrow key */
    if(key.keyCode == '40'){
      switch(this.props.location.pathname){
        case '/':
          this.props.history.push('/bio');
          break;
        case '/bio':
          this.props.history.push('/skills');
          break;
        case '/skills':
          this.props.history.push('/moreskills');
          break;
        case '/moreskills':
          this.props.history.push('/contact');
          break;
      }
    }
  }
  /*
  scrollFunction = (event) => {
    if (event.deltaY < 0) {
      console.info('scrolled up');
      
    } else {
      console.info('scrolled down');
    }
  }*/


  render() {
    /* Checks if any key is pressed */
    window.addEventListener("keydown", this.checkKeyPress, false);
    // When the user scrolls down 80px from the top of the document, call the scrollFunction()
    //window.addEventListener("wheel", this.scrollFunction);
    
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