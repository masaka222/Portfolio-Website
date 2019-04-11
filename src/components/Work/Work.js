import React from 'react';
import './Work.css';
import { CSSTransition } from 'react-transition-group';

class Work extends React.Component {
  render(){
    const appearText = this.state;
    return (
      <div className="work" style = {{ backgroundColor: this.props.color}}>

        <CSSTransition
          in={appearText}
          appear={true}
          key = {this.props.location.key}
          timeout={400}
          classNames="move">
            <div className='work__text'>
              <h2  className='work__text-title'>   {this.props.Title1} </h2>
              <h2  className='work__text-title'>   {this.props.Title2} </h2>
              <div  className = 'work__text-paragraph'>
                <p> {this.props.paragraph} </p>
              </div>
              <div className = 'work__text-links'> 
                <a href = {this.props.weblink} target="_blank" className = 'work__text-link work__text-link-see'>
                  See <span className='work__text-link-arrow'>&#8594;</span>
                </a >
                <a href = {this.props.github} target="_blank" className = 'work__text-link work__text-link-github'>
                  GitHub <span className='work__text-link-arrow'>&#8594;</span>
                </a >
              </div>
            </div>
        </CSSTransition>
        <img src={this.props.picture} className="work__picture"/>
      </div>
    );
  }
}

export default Work;