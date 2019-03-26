import React, { Component } from 'react';
import './Main.css';
import Sidebar from '../Sidebar/Sidebar';

import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Vasilis from '../Vasilis/Vasilis';
import WhatIdo from '../WhatIdo/WhatIdo';
import HowIdoIt from '../HowIdoIt/HowIdoIt';
import MoreSkills from '../MoreSkills/MoreSkills';
import Contact from '../Contact/Contact';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <BrowserRouter>
          <Sidebar/>
          <Switch>
            <Route exact path="/" component={Vasilis}/>
            <Route path="/bio" component={WhatIdo}/>
            <Route path="/skills" component={HowIdoIt}/>
            <Route path="/moreskills" component={MoreSkills}/>
            <Route path="/contact" component={Contact}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default Main;