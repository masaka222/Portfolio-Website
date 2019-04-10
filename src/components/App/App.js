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
        <Header/>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Main}/>
            <Route path='/work' component={Main2}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
