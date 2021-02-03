import React, { Component } from 'react';
import CoreValues from '../../components/CoreValues/CoreValues';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Home.css';
import IntroStatement from '../../components/IntroStatement/IntroStatement';
import ImgCarousel from '../../components/ImgCarousel/ImgCarousel';
import Features from '../../components/Features/Features';
import Aos from 'aos';
import 'aos/dist/aos.css';


class Home extends Component {

  componentDidMount() {
    Aos.init({
      offset: 200,
      duratoin: 1000
    });
  }
  render() {
    return (
      <>
        {/* <Header /> */}
        <ImgCarousel />
        <IntroStatement />
        <Features />
        <CoreValues />
      </>
    )
  }
}

export default Home;