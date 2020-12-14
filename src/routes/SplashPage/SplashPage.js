import React, { Component } from 'react';
import './SplashPage.css';
import Home from '../Home/Home';
import logo from './mcmlogo.jpg';

class SplashPage extends Component {

  state = {
    loading: true,
    ready: false
  }

  componentDidMount() {
    this.handleRender()
  }
  
  handleRender = ()=> setTimeout(() => {
    this.setState({loading:false})
    this.handleReady()
  }, 2000)

  handleReady = () => setTimeout(() => {
    this.setState({ready: true})
  }, 1000)

  render() {

    let isLoading = this.state.loading ? "show-text" : "hide-text"

    return (
      <>
        <img className={isLoading} src={logo}/>
      
        {this.state.ready ? (<Home />) : ""}
      </>
    )
  }
}

export default SplashPage;