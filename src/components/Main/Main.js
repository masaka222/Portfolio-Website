import React, { Component } from 'react';
import './Main.css';
import Sidebar from '../Sidebar/Sidebar';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Vasilis from '../Vasilis/Vasilis';
import About from '../About/About';

import auebPicture from './aueb.png';
import logosPicture from './logos.png';
import laptopPicture from './laptop.png';

import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

class Main extends Component {
  render() {

    /* Bio Page -- Variables */
    const bioPageLink = '/about/bio'
    const bioPageSmallTitle = 'What I do';
    const bioPageBigTitle = <span>Hi, My name is Vasilis Georgoudis,<br/>and I’m a Web Developer based in Greece.</span>;
    const bioPageParagraph = <span>Lorem ipsum dolor sit amet,<br/> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</span>;
    const bioBackgroundColor = 'var(--color-yellow-light)';

    /* Skills Page -- Variables */
    const skillsPageLink = '/about/skills'
    const skillsPageSmallTitle = 'How I do it';
    const skillsPageBigTitle = <span>I always try to use all the latest technologies<br/>to stay relevant in the field of Web Development.</span>;
    const skillsPageParagraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris';
    const skillsBackgroundColor = 'var(--color-mint-light)';

    /* More Skills Page -- Variables */
    const moreSkillsPageLink = '/about/moreSkills'
    const moreSkillsPageSmallTitle = 'More Skills';
    const moreSkillsPageBigTitle = 'I do more than just Web.';
    const moreSkillsPageParagraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris';
    const moreSkillsBackgroundColor = 'var(--color-red-light)';

    /* Contact Page -- Variables */
    const contactPageLink = '/about/contact'
    const contactPageSmallTitle = 'Contact Me';
    const contactPageBigTitle = <span>My mom is proud of my work,<br/>You will be too!</span>;
    const contactPageParagraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris';
    const contactBackgroundColor = 'var(--color-purple-light)';  

    return (
      <div className="main" id='main'>
        <BrowserRouter>
          <Sidebar
            link00 = '/'
            title00 = 'Vasilis Georgoudis'
            link01 = {bioPageLink}
            title01 = 'What I do'
            link02 = {skillsPageLink}
            title02 = 'How I do it'
            link03 = {moreSkillsPageLink}
            title03 = 'More Skills'
            link04 = {contactPageLink}
            title04 = 'Contact Me'
          />
          <Route render={({location})=>(
            <TransitionGroup component={null}>
              <CSSTransition
                  key = {location.key}
                  timeout={500}
                  classNames="fade"
              >
                <Switch location = {location}>
                  <Route exact path="/" component={Vasilis}/>
                  <Route 
                    path="/about/bio" 
                    component={ 
                      props => <About 
                                smallTitle  = {bioPageSmallTitle}
                                bigTitle   = {bioPageBigTitle}
                                paragraph   = {bioPageParagraph}
                                color       = {bioBackgroundColor}
                                picture     = {auebPicture}
                                location    = {location}
                              />
                    }/>
                  <Route 
                    path="/about/skills"
                    component={ 
                      props => <About 
                                smallTitle  = {skillsPageSmallTitle}
                                bigTitle   = {skillsPageBigTitle}
                                paragraph   = {skillsPageParagraph}
                                color       = {skillsBackgroundColor}
                                picture     = {logosPicture}
                                location    = {location}
                              />
                    }/>
                  <Route 
                    path="/about/moreskills" 
                    component={ 
                      props => <About 
                                smallTitle  = {moreSkillsPageSmallTitle}
                                bigTitle   = {moreSkillsPageBigTitle}
                                paragraph   = {moreSkillsPageParagraph}
                                color       = {moreSkillsBackgroundColor}
                                picture     = {laptopPicture}
                                location    = {location}
                              />
                    }/>
                  <Route 
                    path="/about/contact" 
                    component={ 
                      props => <About 
                                smallTitle  = {contactPageSmallTitle}
                                bigTitle    = {contactPageBigTitle}
                                paragraph   = {contactPageParagraph}
                                color       = {contactBackgroundColor}
                                picture     = {laptopPicture}
                                location    = {location}
                              />
                    }/>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default Main;