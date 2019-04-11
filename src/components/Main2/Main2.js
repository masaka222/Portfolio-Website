import React, { Component } from 'react';
import '../Main/Main.css';
import Sidebar from '../Sidebar/Sidebar';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Portfolio from '../Portfolio/Portfolio';
import Work from '../Work/Work';

import bullseye from './bullseye@0,1x.png';

import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

class Main2 extends Component {
  render() {

    /* Bullseye Page -- Variables */
    const bullseyeLink = '/work/bullseye'
    const bullseyeTitle1 = 'Bullseye Burger House';
    const bullseyeTitle2 = 'Website';
    const bullseyeParagraph = 'The website is built using the ReactJS library. It is responsive for every screen size, every browser and different resolution screens.';
    const bullseyeBackgroundColor = 'var(--color-coral-light)';
    const bullseyeWeblink = 'https://www.bullseyeburgerhouse.com';
    const bullseyeGithub = 'https://github.com/masaka222/bullseye-website';

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
            title00 = 'Portfolio'
            link01 = {bullseyeLink}
            title01 = 'Bullseye Burger House'
            link02 = {skillsPageLink}
            title02 = 'DM Studio Animation'
            link03 = {moreSkillsPageLink}
            title03 = 'Snowhunt Transition'
            link04 = {contactPageLink}
            title04 = 'Area2071 Parallax Effect'
          />
          <Route render={({location})=>(
            <TransitionGroup component={null}>
              <CSSTransition
                  key = {location.key}
                  timeout={500}
                  classNames="fade"
              >
                <Switch location = {location}>
                  <Route exact path="/work" component={Portfolio}/>
                  <Route 
                    path="/work/bullseye" 
                    component={ 
                      props => <Work 
                                Title1      = {bullseyeTitle1}
                                Title2      = {bullseyeTitle2}
                                paragraph   = {bullseyeParagraph}
                                color       = {bullseyeBackgroundColor}
                                picture     = {bullseye}
                                location    = {location}
                                weblink     = {bullseyeWeblink}
                                github      = {bullseyeGithub}
                              />
                    }/>
                  <Route 
                    path="/work/skills"
                    component={ 
                      props => <Work 
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
                      props => <Work 
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
                      props => <Work 
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