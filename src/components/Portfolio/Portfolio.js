import React, { Component } from 'react';
import './Portfolio.css';
import portfolioPicture from './portfolio-gif.gif';

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <img src={portfolioPicture} className="portfolio__picture"></img>
      </div>
    );
  }
}

export default Portfolio;