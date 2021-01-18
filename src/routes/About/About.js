import React, { Component } from 'react';
import {ListItems} from './ListItems';
import './About.css';

class About extends Component {
  render() {
    return (
      <section className="about-section">
        <div className="about-head">
          <h2>About Us</h2>
        </div>
        <div>
          <h3 className="about-topic">Mission & Vision</h3>
          <p className="about-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend</p>
          <br></br>
          <p className="about-text">Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend</p>
        </div>

        <div className="expertise-section">
          <h3 className="about-topic">Areas of Expertise</h3>
          <ul>
            
            {ListItems.map((item, i) => {
              return (
                <div className="word-container" style={{"--animation-order": i}}>
                  <li key={i} className="expertise-list">{item.expertise}</li>
                </div>
              )
            })}
          </ul>
        </div>
      </section>
    )
  }
};

export default About;