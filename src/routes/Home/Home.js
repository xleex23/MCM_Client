import React, { Component } from 'react';
import SplashPage from '../SplashPage/SplashPage';
import Header from '../../components/Header/Header';
import CoreValues from '../../components/CoreValues/CoreValues';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {CarItems} from './CarItems';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <Carousel autoPlay showArrows={true} infiniteLoop={true}>
          {CarItems.map((item) => {
            return (
              <div>
                <img src={item.imgSrc} className={item.iClass}/>
                <p className={item.pClass}>{item.legend}</p>
              </div>
              )
          })}
        </Carousel>
        <div className="who-section">
          <h2 className="who-tag">WHO WE ARE</h2>
          <div className="who-border"></div>
          <p className="who-p">The Mediation Center’s team of mediators, facilitators and consultants each bring more than 25 years of professional experience helping people solve problems and manage conflict. Our team’s collaboration creates one of the most culturally and professionally rich pools in the Midwest. We are drawn to work together to work with groups who want to build their internal capacity and make transformative, sustainable changes.</p>
        </div>
        <CoreValues />
      </>
    )
  }
}

export default Home;