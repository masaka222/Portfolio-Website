import React from 'react';
import './Work.css';
import { CSSTransition } from 'react-transition-group';

class Work extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      appearText:true
    }
  }

  toggleAppear = () => {
    this.setState({appearText: !this.state.appearText})
  }

  render(){
    // Setting my picture variable as a CSS variable, to use it as a background picture
    document.documentElement.style.setProperty('--work-background-picture',  `url('${this.props.picture}')`);

    const appearText = this.state;

    return (
      <div className="work" style = {{ backgroundColor: this.props.color}}>
        <div className='work__text'>
        <CSSTransition
          in={appearText}
          appear={true}
          key = {this.props.location.key}
          timeout={400}
          classNames="move">
            <div>
              <h2  className='work__text-title'>   {this.props.Title1} </h2> <br/>
              <h2  className='work__text-title'>   {this.props.Title2} </h2>
            </div>
        </CSSTransition>  
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
        <img src={this.props.picture} className="work__picture"/>
      </div>
    );
  }
}

export default Work;