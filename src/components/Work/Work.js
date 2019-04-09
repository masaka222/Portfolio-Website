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

  componentWillUnmount(){
    this.setState({appearText: !this.state.appearText})
  }

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
              <h4  className='work__text-small-title'> {this.props.smallTitle} </h4>
              <h2  className='work__text-big-title'>   {this.props.bigTitle1} </h2>
              <h2  className='work__text-big-title'>   {this.props.bigTitle2} </h2>
              <div  className = 'work__text-paragraph'>
                <p> {this.props.paragraph} </p>
              </div>
            </div>
        </CSSTransition>
        <img src={this.props.picture} className="work__picture"/>
      </div>
    );
  }
}

export default Work;