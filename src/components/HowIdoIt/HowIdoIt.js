import React, { Component } from 'react';
import './HowIdoIt.css';
import image from './logos@0,1x.png';

class HowIdoIt extends Component {
  render() {
    return (
      <div className="how-I-do-it">
        <div className='how-I-do-it__text'> 
          <h4  className='how-I-do-it__text-small-title'> How I do it</h4>
          <h2  className='how-I-do-it__text-big-title'> I always try to use all the latest technologies </h2>
          <h2  className='how-I-do-it__text-big-title'> to stay relevant in the field of Web Development. </h2>
          <div  className = 'how-I-do-it__text-paragraph'>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            <p> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
          </div>
        </div>

        <img src={image} className="how-I-do-it__picture"/>
      </div>
    );
  }
}

export default HowIdoIt;