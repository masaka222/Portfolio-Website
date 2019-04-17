import React, { Component } from 'react';
import './Portfolio.css';
import portfolioPicture from './portfolio-gif.gif';

class Portfolio extends Component {

  componentWillMount(){
    var element = document.getElementById('aboutLink');
    if(element.classList.contains('headernav-active')){
     element.classList.remove('headernav-active');
    }
  }
  
  render() {
    return (
      <div className="portfolio">
        <img src={portfolioPicture} className="portfolio__picture"></img>
      </div>
    );
  }
}

export default Portfolio;