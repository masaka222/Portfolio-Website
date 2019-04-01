import React, { Component } from 'react';
import './MoreSkills.css';
import image from './laptop.png';

class MoreSkills extends Component {
  render() {
    return (
      <div className="more-skills">
        <div className='more-skills__text'> 
          <h4  className='more-skills__text-small-title'> More Skills</h4>
          <h2  className='more-skills__text-big-title'> I do more than just Web. </h2>
          <div  className = 'more-skills__text-paragraph'>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            <p> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
          </div>
        </div>

        <img src={image} className="more-skills__picture"/>
      </div>
    );
  }
}

export default MoreSkills;