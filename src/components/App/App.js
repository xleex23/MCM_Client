import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../routes/Home/Home';
import SplashPage from '../../routes/SplashPage/SplashPage';
import About from '../../routes/About/About';
import Header from '../Header/Header';
import './App.css';

class App extends Component {
  
  render() {
    return (
      <>
      <Header />
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/about'} component={About} />
        </Switch>
      </>
    )
  }
}

export default App;
