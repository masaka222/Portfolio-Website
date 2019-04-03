import React from 'react';
import './About.css';

const About = (props) => {
    return (
      <div className="about" style = {{ backgroundColor: props.color}}>
        <div className='about__text'> 
          <h4  className='about__text-small-title'> {props.smallTitle} </h4>
          <h2  className='about__text-big-title'>   {props.bigTitle1} </h2>
          <h2  className='about__text-big-title'>   {props.bigTitle2} </h2>
          <div  className = 'about__text-paragraph'>
            <p> {props.paragraph} </p>
          </div>
        </div>

        <img src={props.picture} className="about__picture"/>
      </div>
    );
}

export default About;