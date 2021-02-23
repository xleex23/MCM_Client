import React, { useState } from 'react';
import {TeamInfo} from './TeamInfo';
import './Team.css';

function Team() {

  return (
    <div>
      <div className="comp-head">
        <h2>Our Team</h2>
      </div>
     
    {
      TeamInfo.map((item) => {
        
        return (
          <div className="card" style={{backgroundImg: item}}>
          <div className="info">
            <h2 className="title">{item.name}</h2>
            <p className="description">{item.details}</p>
          </div>
        </div>
        )
      })
    }

    </div>
  )
};

export default Team;