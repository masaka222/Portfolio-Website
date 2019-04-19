import React, { Component } from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import './Header.css';
import linkedin from './linkedin-logo.png';
import github from './github-logo.png';

class Header extends Component {

  animateWork = (e) =>{
    //To delay the page change until the blackbox animation is done
    e.preventDefault();
      setTimeout(() => {
      this.props.history.push('/work')
    },700)

    //make the arrows gif appear
    //document.getElementById('arrowGif').style.display="block";
    //document.getElementById('arrowGif').classList.add('appGif__animation');
    
    //add the animation classes to my components
    document.getElementById('main').classList.add('animateMain1-1');
    setTimeout(function() {
      document.getElementById('main2').classList.add('animateMain1-2')
    },700)
    
    //now I need to remove the animation class from main2 (the component that I'm in at the moment)
    setTimeout(function() {
      document.getElementById('main2').classList.remove('animateMain1-2');
      //make the arrows gif disappear
      //document.getElementById('arrowGif').style.display="none";
    },1400)
  }

  animateAbout = (e) =>{
    //To delay the page change until the blackbox animation is done
    e.preventDefault();
      setTimeout(() => {
      this.props.history.push('/')
    },700)

    //add the animation classes to my components
    document.getElementById('main2').classList.add('animateMain2-1');
    setTimeout(function() {
      document.getElementById('main').classList.add('animateMain2-2')
    },700)
    
    //now I need to remove the animation class from main (the component that I'm in at the moment)
    setTimeout(function() {
      document.getElementById('main').classList.remove('animateMain2-2');
    },1400)
  }
  /*
  componentDidMount(){
    if (this.props.location.pathname === '/about/bio'){
      console.log('it works');
    }
  }*/

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
          <NavLink exact to='/' id = 'aboutLink' activeClassName='headernav-active' className = 'center_navigation__about' onClick={this.animateAbout}> About </NavLink>
          <NavLink to='/work' id = 'workLink' activeClassName='headernav-active' className = 'center_navigation__work' onClick={this.animateWork}> Work </NavLink>
        </div>

        <div className="social">
          <a href="https://www.linkedin.com/in/vasilis-georgoudis-69211971/" target="_blank"><img src={linkedin} className="social__linkedin"></img></a>
          <a href="https://github.com/masaka222" target="_blank"> <img src={github} className="social__github"></img></a>
        </div>
      </header>
    );
  }
}

Header = withRouter(Header);

export default Header;