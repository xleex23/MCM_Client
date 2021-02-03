import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../routes/Home/Home';
import About from '../../routes/About/About';
import Header from '../Header/Header';
import Contact from '../../routes/Contact/Contact';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <>
      <Header />
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/about'} component={About} />
          <Route exact path={'/contact'} component={Contact} />
        </Switch>
      </>
    )
  }
}

export default App;
