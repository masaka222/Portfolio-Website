import React from 'react';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';
import Vasilis from '../components/Vasilis/Vasilis';
import WhatIdo from '../components/WhatIdo/WhatIdo';
import HowIdoIt from '../components/HowIdoIt/HowIdoIt';
import MoreSkills from '../components/MoreSkills/MoreSkills';
import Contact from '../components/Contact/Contact';

const AppRouter = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Vasilis}/>
            <Route path="/bio" component={WhatIdo}/>
            <Route path="/skills" component={HowIdoIt}/>
            <Route path="/moreskills" component={MoreSkills}/>
            <Route path="/contact" component={Contact}/>
        </Switch>
    </BrowserRouter>
);

export default AppRouter;