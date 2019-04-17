import React from 'react';
import './About.css';
import { CSSTransition } from 'react-transition-group';

class About extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      appearText:true
    }
  }

  toggleAppear = () => {
    this.setState({appearText: !this.state.appearText})
  }

  componentWillUnmount(){
    this.setState({appearText: !this.state.appearText})/*
    if(this.props.location.pathname === '/work'){
      document.getElementById('aboutLink').classList.remove('headernav-active');
    }*/
  }

  componentDidMount(){
    //var path = this.props.location.pathname;
    //if (path.startsWith('/about')){
      //console.log('starts with about');
      document.getElementById('aboutLink').classList.add('headernav-active');
    //}
  }

  render(){
    const appearText = this.state;
    return (
      <div className="about" style = {{ backgroundColor: this.props.color}}>

        <CSSTransition
          in={appearText}
          appear={true}
          key = {this.props.location.key}
          timeout={400}
          classNames="move">
            <div className='about__text'> 
              <h4  className='about__text-small-title'> {this.props.smallTitle} </h4>
              <h2  className='about__text-big-title'>   {this.props.bigTitle1} </h2>
              <h2  className='about__text-big-title'>   {this.props.bigTitle2} </h2>
              <div  className = 'about__text-paragraph'>
                <p> {this.props.paragraph} </p>
              </div>
            </div>
        </CSSTransition>
        <img src={this.props.picture} className="about__picture"/>
      </div>
    );
  }
}

export default About;