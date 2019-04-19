import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Sidebar.css';

class Sidebar extends Component {

  /* This function gives the class of active when the list item is indeed active*/
  getActiveClass = (path) => {
    return this.props.location.pathname === path ? "active" : " "
  }

  checkTest = () => {
    this.props.location.pathname = this.props.link01;
  }
  /* Checks if up or down arrow keys are pressed to navigate with buttons OR
      if you scroll to navigate with scrolling */
  checkKeyPress = (key) => {
    /* When you press the up arrow key OR scroll down, if for example you are on the /contact page, you're gonna navigate to
       the moreskills page next. */
    if(key.keyCode == '38' || key.deltaY < -50){
      switch(this.props.location.pathname){
        case this.props.link04:
          this.props.history.push(this.props.link03);
          /* I stop the scroll event from happening right after */
          window.removeEventListener("wheel", this.checkKeyPress);
          /* And resume it after some time */
          setTimeout(()=>{
            window.addEventListener("wheel", this.checkKeyPress);
          },700);
          break;
        case this.props.link03:
          this.props.history.push(this.props.link02);
          window.removeEventListener("wheel", this.checkKeyPress);
          setTimeout(()=>{
            window.addEventListener("wheel", this.checkKeyPress);
          },700);
          break;
        case this.props.link02:
          this.props.history.push(this.props.link01);
          window.removeEventListener("wheel", this.checkKeyPress);
          setTimeout(()=>{
            window.addEventListener("wheel", this.checkKeyPress);
          },700);
          break;
        case this.props.link01:
          this.props.history.push(this.props.link00);
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
        case this.props.link00:
          this.props.history.push(this.props.link01);
          window.removeEventListener("wheel", this.checkKeyPress);
          setTimeout(()=>{
            window.addEventListener("wheel", this.checkKeyPress);
          },700);
          break;
        case this.props.link01:
          this.props.history.push(this.props.link02);
          window.removeEventListener("wheel", this.checkKeyPress);
          setTimeout(()=>{
            window.addEventListener("wheel", this.checkKeyPress);
          },700);
          break;
        case this.props.link02:
          this.props.history.push(this.props.link03);
          window.removeEventListener("wheel", this.checkKeyPress);
          setTimeout(()=>{
            window.addEventListener("wheel", this.checkKeyPress);
          },700);
          break;
        case this.props.link03:
          this.props.history.push(this.props.link04);
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
                <li className = {"sidebar__navigation-list-item " + this.getActiveClass(this.props.link00)}>
                  <Link exact to={this.props.link00}>
                    <div className = {"list-number"+ this.getActiveClass(this.props.link00)}>00</div>
                    <div className = {"list-text "+ this.getActiveClass(this.props.link00)}> {this.props.title00} </div>
                  </Link>
                </li>
                <li className = {"sidebar__navigation-list-item " + this.getActiveClass(this.props.link01)}>
                  <Link exact to={this.props.link01}>
                    <div className = {"list-number"+ this.getActiveClass(this.props.link01)}>01</div>
                    <div className = {"list-text "+ this.getActiveClass(this.props.link01)}> {this.props.title01} </div>
                  </Link>
                </li>
                <li className = {"sidebar__navigation-list-item " + this.getActiveClass(this.props.link02)}>
                  <Link exact to={this.props.link02}>
                    <div className = {"list-number"+ this.getActiveClass(this.props.link02)}>02</div>
                    <div className = {"list-text "+ this.getActiveClass(this.props.link02)}> {this.props.title02} </div>
                  </Link>
                </li>
                <li className={"sidebar__navigation-list-item " + this.getActiveClass(this.props.link03)}>
                  <Link exact to={this.props.link03}>
                    <div className = {"list-number"+ this.getActiveClass(this.props.link03)}>03</div>
                    <div className = {"list-text "+ this.getActiveClass(this.props.link03)}> {this.props.title03} </div>
                  </Link>
                </li>
                <li className={"sidebar__navigation-list-item " + this.getActiveClass(this.props.link04)}>
                  <Link exact to={this.props.link04}>
                    <div className = {"list-number"+ this.getActiveClass(this.props.link04)}>04</div>
                    <div className = {"list-text "+ this.getActiveClass(this.props.link04)}> {this.props.title04} </div>
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