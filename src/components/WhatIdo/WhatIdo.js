import React, { Component } from 'react';
import './WhatIdo.css';
import auebPicture from './aueb.png';

class WhatIdo extends Component {
  render() {
    return (
      <div className="what-I-do">
        <div className='what-I-do__text'> 
          <h4  className='what-I-do__text-small-title'> What I do </h4>
          <h2  className='what-I-do__text-big-title'> Hi, My name is Vasilis Georgoudis, </h2>
          <h2  className='what-I-do__text-big-title'> and I’m a Web Developer based in Greece. </h2>
          <div  className = 'what-I-do__text-paragraph'>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            <p> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
          </div>
        </div>

        <img src={auebPicture} className="what-I-do__picture"/>
      </div>
    );
  }
}

export default WhatIdo;