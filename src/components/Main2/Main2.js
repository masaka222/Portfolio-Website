import React, { Component } from 'react';
import '../Main/Main.css';
import Sidebar from '../Sidebar/Sidebar';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Portfolio from '../Portfolio/Portfolio';
import Work from '../Work/Work';

import bullseye from './bullseye@0,1x.png';
import mountains from './mountains.png';
import camera from './camera2.png';
import area from './area-white.png';

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
    const bullseyeBackgroundColor = 'var(--color-red-light)';
    const bullseyeWeblink = 'https://www.bullseyeburgerhouse.com';
    const bullseyeGithub = 'https://github.com/masaka222/bullseye-website';

    /* DM Studio Page -- Variables */
    const DMstudioLink = '/work/dmstudio'
    const DMstudioTitle1 = 'D. M. - Studio';
    const DMstudioTitle2 = 'Animation';
    const DMstudioParagraph = 'This is a website concept with an Opening Menu Animation. It is built using the ReactJS library, CSS Grid and Flexbox';
    const DMstudioBackgroundColor = 'var(--color-mint-light)';
    const DMstudioWeblink = 'https://masaka222.github.io/D.-M.-Studio-animation/';
    const DMstudioGithub = 'https://github.com/masaka222/D.-M.-Studio-animation';

    /* Snowhunt Page -- Variables */
    const snowhuntLink = '/work/snowhunt'
    const snowhuntTitle1 = 'Snowhunt';
    const snowhuntTitle2 = 'Page Transition';
    const snowhuntParagraph = 'This is a website concept with an Inner Page Transition. It is built using the ReactJS library, CSS Grid and Flexbox';
    const snowhuntBackgroundColor = 'var(--color-blue-light)';
    const snowhuntWeblink = 'https://masaka222.github.io/snowhunt-project/';
    const snowhuntGithub = 'https://github.com/masaka222/snowhunt-project';

    /* Area2071 Page -- Variables */
    const area2071Link = '/work/area2071'
    const area2071Title1 = 'Area 2071';
    const area2071Title2 = 'Landing Page';
    const area2071Paragraph = 'This is a landing page concept with a Parallax Effect. It is built using the ReactJS library, CSS Grid and Flexbox';
    const area2071BackgroundColor = 'var(--color-purple-light)';
    const area2071Weblink = 'https://masaka222.github.io/Area2071/';
    const area2071Github = 'https://github.com/masaka222/Area2071';


    return (
      <div className="main mainBlackbox">
        <BrowserRouter>
          <Sidebar
            link00 = '/work'
            title00 = 'Portfolio'
            link01 = {bullseyeLink}
            title01 = 'Bullseye Burger House'
            link02 = {DMstudioLink}
            title02 = 'DM Studio Animation'
            link03 = {snowhuntLink}
            title03 = 'Snowhunt Transition'
            link04 = {area2071Link}
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
                    path="/work/dmstudio"
                    component={ 
                      props => <Work 
                                Title1      = {DMstudioTitle1}
                                Title2      = {DMstudioTitle2}
                                paragraph   = {DMstudioParagraph}
                                color       = {DMstudioBackgroundColor}
                                picture     = {camera}
                                location    = {location}
                                weblink     = {DMstudioWeblink}
                                github      = {DMstudioGithub}
                              />
                    }/>
                  <Route 
                    path="/work/snowhunt" 
                    component={ 
                      props => <Work 
                                Title1      = {snowhuntTitle1}
                                Title2      = {snowhuntTitle2}
                                paragraph   = {snowhuntParagraph}
                                color       = {snowhuntBackgroundColor}
                                picture     = {mountains}
                                location    = {location}
                                weblink     = {snowhuntWeblink}
                                github      = {snowhuntGithub}
                              />
                    }/>
                  <Route 
                    path="/work/area2071" 
                    component={ 
                      props => <Work 
                                Title1      = {area2071Title1}
                                Title2      = {area2071Title2}
                                paragraph   = {area2071Paragraph}
                                color       = {area2071BackgroundColor}
                                picture     = {area}
                                location    = {location}
                                weblink     = {area2071Weblink}
                                github      = {area2071Github}
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