import React, { Component } from 'react';
import './Main.css';
import Sidebar from '../Sidebar/Sidebar';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Vasilis from '../Vasilis/Vasilis';
import About from '../About/About';

import auebPicture from './aueb.png';
import logosPicture from './logos.png';
import laptopPicture from './laptop.png';
import momPicture from './mom@0,1x.png';

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
    const bioPageParagraph = <span> I've always been drawn to the world of Web Development.<br/> 
                                    My journey began when I started studying Computer Science at Athens University 
                                    of Economics and Business. <br/> During that time, I worked on multiple front-end 
                                    projects, built a <a target="_blank" href='https://wordpress.org/plugins/all-in-one-metadata/'> 
                                    plugin with Wordpress</a> and even worked on my design skills to deliver beautiful user experiences. <br/>
                                    I enjoy each aspect of my job, and try to be precise with every pixel. </span>;
    const bioBackgroundColor = 'var(--color-yellow-light)';

    /* Skills Page -- Variables */
    const skillsPageLink = '/about/skills'
    const skillsPageSmallTitle = 'How I do it';
    const skillsPageBigTitle = <span>I always try to use all the latest technologies<br/>to stay relevant in the field of Web Development.</span>;
    const skillsPageParagraph = <span>
                                      <div id='left'>
                                        <h4 className='main-small-title'> Front end</h4><br/>
                                        HTML<br/>
                                        CSS (Sass, CSS Grid, Flexbox)<br/>
                                        Javascript (ES6)<br/>
                                        React<br/>
                                        Redux
                                      </div>
                                      <div id='right'>
                                        <h4 className='main-small-title'> Back end</h4><br/>
                                        SQL<br/>
                                        NodeJS<br/>
                                        Firebase<br/>
                                        <h4 className='main-small-title' style= {{marginTop: '2rem'}}> CMS </h4><br/>
                                        Wordpress
                                      </div>
                                </span>;
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
                                picture     = {momPicture}
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