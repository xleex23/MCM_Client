import React, { Component } from 'react';
import SplashPage from '../SplashPage/SplashPage';
import Header from '../../components/Header/Header';

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home">This Is Home</div>
      </>
    )
  }
}

export default Home;