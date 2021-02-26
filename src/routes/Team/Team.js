import React, { useState } from 'react';
import {TeamInfo} from './TeamInfo';
import './Team.css';

function Team() {

  return (
    <div className="team-container">
      <div className="comp-head">
        <h2>Our Team</h2>
      </div>

      <p className="team-summary">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend.</p>

      <h3>Meet Our Team Members!</h3>

    <div className="team-members">
      {
        TeamInfo.map((item) => {
          
          return (
            <div className="card2" style={{backgroundImage: 'url('+ item.pic +')'}}>
            <div className="info">
              <h2 className="title">{item.name}</h2>
              <p className="description">{item.details}</p>
            </div>
          </div>
          )

        })
      }
    </div> 

    </div>
  )
};

export default Team;