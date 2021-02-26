import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../../routes/Home/Home';
import About from '../../routes/About/About';
import Header from '../Header/Header';
import Contact from '../../routes/Contact/Contact';
import './App.css';
import Team from '../../routes/Team/Team';
import Training from '../../routes/Training/Training';

class App extends Component {
  
  render() {
    return (
      <>
        <Header />
        <div className="main">
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/about'} component={About} />
          <Route exact path={'/contact'} component={Contact} />
          <Route exact path={'/team'} component={Team} />
          <Route exact path={'/training'} component={Training} />

        </Switch>
        </div>
      </>
    )
  }
}

export default App;
