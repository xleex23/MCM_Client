import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../routes/Home/Home';
import SplashPage from '../../routes/SplashPage/SplashPage';
import './App.css';
import { Signer } from 'crypto';

class App extends Component {
  
  render() {
    return (
      <>
        <Switch>
          <Route exact path={'/'} component={SplashPage} />
        </Switch>
      </>
    )
  }
}

export default App;
