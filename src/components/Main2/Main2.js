import React, { Component } from 'react';
import '../Main/Main.css';
import Sidebar from '../Sidebar/Sidebar';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Vasilis from '../Vasilis/Vasilis';
import About from '../About/About';
import Work from '../Work/Work';

import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

class Main2 extends Component {
  render() {

    /* Bio Page -- Variables */
    const bioPageLink = '/work/bio'
    const bioPageSmallTitle = 'What I do';
    const bioPageBigTitle1 = 'Hi, My name is Vasilis Georgoudis,';
    const bioPageBigTitle2 = 'and I’m a Web Developer based in Greece.';
    const bioPageParagraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris';
    const bioBackgroundColor = 'var(--color-yellow-light)';

    /* Skills Page -- Variables */
    const skillsPageLink = '/work/skills'
    const skillsPageSmallTitle = 'How I do it';
    const skillsPageBigTitle1 = 'I always try to use all the latest technologies';
    const skillsPageBigTitle2 = 'to stay relevant in the field of Web Development.';
    const skillsPageParagraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris';
    const skillsBackgroundColor = 'var(--color-mint-light)';

    /* More Skills Page -- Variables */
    const moreSkillsPageLink = '/work/moreSkills'
    const moreSkillsPageSmallTitle = 'More Skills';
    const moreSkillsPageBigTitle1 = 'I do more than just Web.';
    const moreSkillsPageParagraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris';
    const moreSkillsBackgroundColor = 'var(--color-red-light)';

    /* Contact Page -- Variables */
    const contactPageLink = '/work/contact'
    const contactPageSmallTitle = 'Contact Me';
    const contactPageBigTitle1 = 'My mom is proud of my work';
    const contactPageBigTitle2 = 'You will be too!';
    const contactPageParagraph = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris';
    const contactBackgroundColor = 'var(--color-purple-light)';


    return (
      <div className="main">
        <BrowserRouter>
          <Sidebar
            link00 = '/work'
            title00 = 'Vasilis'
            link01 = {bioPageLink}
            title01 = 'What'
            link02 = {skillsPageLink}
            title02 = 'How'
            link03 = {moreSkillsPageLink}
            title03 = 'More'
            link04 = {contactPageLink}
            title04 = 'Contact'
          />
          <Route render={({location})=>(
            <TransitionGroup component={null}>
              <CSSTransition
                  key = {location.key}
                  timeout={500}
                  classNames="fade"
              >
                <Switch location = {location}>
                  <Route exact path="/work" component={Vasilis}/>
                  <Route 
                    path="/work/bio" 
                    component={ 
                      props => <About 
                                smallTitle  = {bioPageSmallTitle}
                                bigTitle1   = {bioPageBigTitle1}
                                bigTitle2   = {bioPageBigTitle2}
                                paragraph   = {bioPageParagraph}
                                color       = 'red'
                               
                                location    = {location}
                              />
                    }/>
                  <Route 
                    path="/work/skills"
                    component={ 
                      props => <About 
                                smallTitle  = {skillsPageSmallTitle}
                                bigTitle1   = {skillsPageBigTitle1}
                                bigTitle2   = {skillsPageBigTitle2}
                                paragraph   = {skillsPageParagraph}
                                color       = {skillsBackgroundColor}
                                
                                location = {location}
                              />
                    }/>
                  <Route 
                    path="/work/moreskills" 
                    component={ 
                      props => <About 
                                smallTitle  = {moreSkillsPageSmallTitle}
                                bigTitle1   = {moreSkillsPageBigTitle1}
                                paragraph   = {moreSkillsPageParagraph}
                                color       = {moreSkillsBackgroundColor}
                                
                                location = {location}
                              />
                    }/>
                  <Route 
                    path="/work/contact" 
                    component={ 
                      props => <About 
                                smallTitle  = {contactPageSmallTitle}
                                bigTitle1   = {contactPageBigTitle1}
                                bigTitle2   = {contactPageBigTitle2}
                                paragraph   = {contactPageParagraph}
                                color       = {contactBackgroundColor}
                                
                                location = {location}
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

export default Main2;