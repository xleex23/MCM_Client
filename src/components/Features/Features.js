import React, { Component } from 'react';
import 'aos/dist/aos.css';
import './Features.css';
import book from './book.jpg';
import gear from './gear.jpg';
import serve from './serve.jpg';

class Features extends Component {
  render() {
    return (
      <>
      <div className="hidden-box"></div>

      <section className="feature-container">

        <div className="fcard">
          <img src={book} className="f-icon"/>
          <div className="card-text">
            <h3>Training</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
            </p>
            <a href="#" className="route-btn">Learn More</a>
          </div>
        </div>

        <div className="fcard" data-aos="fade-left">
          <img src={serve} className="f-icon"/>
          <div className="card-text">
            <h3>Services</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
            </p>
            <a href="#" className="route-btn">Learn More</a>
          </div>
        </div>

        <div className="fcard" data-aos="fade-right">
          <img src={gear} className="f-icon"/>
          <div className="card-text">
            <h3>Resources</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
            </p>
            <a href="#" className="route-btn">Learn More</a>
          </div>
        </div>

      </section>
      </>
    )
  }
}

export default Features;