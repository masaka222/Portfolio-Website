import React, { Component } from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import './Header.css';
import linkedin from './linkedin-logo.png';
import github from './github-logo.png';

class Header extends Component {

  animateAbout = (e) =>{
    //To delay the page change until the blackbox animation is done
    e.preventDefault();
      setTimeout(() => {
      this.props.history.push('/work')
    },700)
    document.getElementById('main').classList.add('animateBlackBox-rightToleft');
    setTimeout(function() {
      document.getElementById('main2').classList.add('animateBlackBox-leftToright')
    },700)
  }

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
          <NavLink exact to='/' activeClassName='headernav-active' className = 'center_navigation__about'> About </NavLink>
          <NavLink to='/work' activeClassName='headernav-active' className = 'center_navigation__work' onClick={this.animateAbout}> Work </NavLink>
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