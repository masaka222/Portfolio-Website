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
    const bioPageSmallTitle = 'What I do';
    const bioPageBigTitle1 = 'Hi, My name is Vasilis Georgoudis,';
    const bioPageBigTitle2 = 'and I’m a Web Developer based in Greece.';
    const bioPageParagraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris';
    const bioBackgroundColor = 'var(--color-yellow-light)';

    /* Skills Page -- Variables */
    const skillsPageSmallTitle = 'How I do it';
    const skillsPageBigTitle1 = 'I always try to use all the latest technologies';
    const skillsPageBigTitle2 = 'to stay relevant in the field of Web Development.';
    const skillsPageParagraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris';
    const skillsBackgroundColor = 'var(--color-mint-light)';

    /* More Skills Page -- Variables */
    const moreSkillsPageSmallTitle = 'More Skills';
    const moreSkillsPageBigTitle1 = 'I do more than just Web.';
    const moreSkillsPageParagraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris';
    const moreSkillsBackgroundColor = 'var(--color-red-light)';

    /* Contact Page -- Variables */
    const contactPageSmallTitle = 'Contact Me';
    const contactPageBigTitle1 = 'My mom is proud of my work';
    const contactPageBigTitle2 = 'You will be too!';
    const contactPageParagraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris';
    const contactBackgroundColor = 'var(--color-purple-light)';


    return (
      <div className="main">
        <BrowserRouter>
          <Sidebar/>
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
                    path="/bio" 
                    component={ 
                      props => <About 
                                smallTitle  = {bioPageSmallTitle}
                                bigTitle1   = {bioPageBigTitle1}
                                bigTitle2   = {bioPageBigTitle2}
                                paragraph   = {bioPageParagraph}
                                color       = {bioBackgroundColor}
                                picture     = {auebPicture}
                              />
                    }/>
                  <Route 
                    path="/skills"
                    component={ 
                      props => <About 
                                smallTitle  = {skillsPageSmallTitle}
                                bigTitle1   = {skillsPageBigTitle1}
                                bigTitle2   = {skillsPageBigTitle2}
                                paragraph   = {skillsPageParagraph}
                                color       = {skillsBackgroundColor}
                                picture     = {logosPicture}
                              />
                    }/>
                  <Route 
                    path="/moreskills" 
                    component={ 
                      props => <About 
                                smallTitle  = {moreSkillsPageSmallTitle}
                                bigTitle1   = {moreSkillsPageBigTitle1}
                                paragraph   = {moreSkillsPageParagraph}
                                color       = {moreSkillsBackgroundColor}
                                picture     = {laptopPicture}
                              />
                    }/>
                  <Route 
                    path="/contact" 
                    component={ 
                      props => <About 
                                smallTitle  = {contactPageSmallTitle}
                                bigTitle1   = {contactPageBigTitle1}
                                bigTitle2   = {contactPageBigTitle2}
                                paragraph   = {contactPageParagraph}
                                color       = {contactBackgroundColor}
                                picture     = {laptopPicture}
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