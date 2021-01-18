import React, { Component } from 'react';
import '../../routes/Home/Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';


class IntroStatement extends Component {
  render() {
    return (
      <>
        <div className="who-section">
          <h2 className="who-tag">WHO WE ARE</h2>
          <div className="who-border"></div>
          <a href="https://www.linkedin.com/company/mediation-center" className="linkedIn social-icon" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <p className="who-p">The Mediation Center’s team of mediators, facilitators and consultants each bring more than 25 years of professional experience helping people solve problems and manage conflict. Our team’s collaboration creates one of the most culturally and professionally rich pools in the Midwest. We are drawn to work together to work with groups who want to build their internal capacity and make transformative, sustainable changes.</p>
          
        </div>
      </>
    )
  }
}

export default IntroStatement;