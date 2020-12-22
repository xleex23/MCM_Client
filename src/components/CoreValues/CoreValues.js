import React, { Component } from 'react';
import './CoreValues.css'

class CoreValues extends Component {
  render() {
    return (
      <div className="values-section"
        
      >
        <h2 className="values-tag">Our Commitment to Clients</h2>
        <div className="values-border"></div>
        <div className="cards-container">
          <div className="card">
            <p className="card-p 1">Consultative Partnerships</p>
          </div>
          <div className="card">
            <p className="card-p">Participant Agreed Outcomes</p>
          </div>
          <div className="card">
            <p className="card-p 1">Tailored Interventions</p>
          </div>
          <div className="card">
            <p className="card-p 2">Complete Transparency</p>
          </div>
          <div className="card">
            <p className="card-p 1">All Perspectives Reflected</p>
          </div>
          <div className="card">
            <p className="card-p 1">Collaborative Design Process</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoreValues;