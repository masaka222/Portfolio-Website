import React, { Component } from 'react';
import './Main.css';
import Sidebar from '../Sidebar/Sidebar';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Vasilis from '../Vasilis/Vasilis';
import About from '../About/About';

import auebPicture from './aueb@0,33x-compressor.png';
import logosPicture from './logos-compressor.png';
import laptopPicture from './laptop-compressor.png';
import momPicture from './mom@0,1x-compressor.png';

import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

class Main extends Component {
  render() {

    /* Bio Page -- Variables */
    const bioPageLink = '/about/bio'
    const bioPageSmallTitle = 'What I do';
    const bioPageBigTitle   = <span>Hi, My name is Vasilis Georgoudis,<br/>and I’m a Web Developer based in Greece.</span>;
    const bioPageParagraph  = <span>I've always been drawn to the world of Web Development.<br/> 
                                    My journey began at Athens University of Economics and Business, where I studied Computer Science. <br/>
                                    During that time, I worked on multiple front-end 
                                    projects, built a <a target="_blank" href='https://wordpress.org/plugins/all-in-one-metadata/'> 
                                    plugin with Wordpress</a> and even worked on my design skills to deliver beautiful user experiences. <br/>
                                    Doing that, I was able to help both large scale and smaller sized companies with their products throughout the years. <br/>
                                    I enjoy each aspect of my job, and try to be precise with every pixel. </span>;
    const bioBackgroundColor = 'var(--color-yellow-light)';

    /* Skills Page -- Variables */
    const skillsPageLink = '/about/skills'
    const skillsPageSmallTitle = 'How I do it';
    const skillsPageBigTitle = <span>I like to use all the latest technologies<br/>to stay up-to-date in the ever changing world of Web Development.</span>;
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
                                        NodeJS<br/>
                                        Express<br/>
                                        Relational DB<br/>
                                        <h4 className='main-small-title' style= {{marginTop: '2rem'}}> CMS </h4><br/>
                                        Wordpress
                                      </div>
                                </span>;
    const skillsBackgroundColor = 'var(--color-mint-light)';

    /* More Skills Page -- Variables */
    const moreSkillsPageLink = '/about/moreSkills'
    const moreSkillsPageSmallTitle = 'More Skills';
    const moreSkillsPageBigTitle = <span>I do more than just Web.</span>;
    const moreSkillsPageParagraph = <span>
                                      <div style= {{marginBottom: '5rem'}}>I'm also very familiar with Object Oriented Programming, User Experience and Design, and have also spent some time doing iOS developement</div>
                                      <div id='left'>
                                        <h4 className='main-small-title'> Programming </h4><br/>
                                        Java<br/>
                                        C / C++<br/>
                                        MATLAB<br/>
                                      </div>
                                      <div id='right'>
                                        <h4 className='main-small-title'> Software</h4><br/>
                                        Adobe Photoshop<br/>
                                        Adobe Illustrator<br/>
                                        Adobe Xd<br/>
                                        Xcode<br/>
                                      </div>
                                    </span>;
    const moreSkillsBackgroundColor = 'var(--color-red-light)';

    /* Contact Page -- Variables */
    const contactPageLink = '/about/contact'
    const contactPageSmallTitle = 'Contact Me';
    const contactPageBigTitle = <span>My mom is proud of my work,<br/>You will be too!</span>;
    const contactPageParagraph = <span>Send me an email at: <a href="mailto:vasilios.georgoudis@hotmail.com" className='center_navigation__email'>vasilios.georgoudis@hotmail.com</a> or contact me through my LinkedIn page on the top right of the screen, and let's build something together! </span>;
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