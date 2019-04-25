import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Main2 from '../Main2/Main2';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Header/>
          <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/about' component={Main}/> {/* Without this, when you were loading an /about/.. page from the urlbar, it would fail load */}
            <Route path='/work' component={Main2}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
