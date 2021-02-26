import React, { useState } from 'react';
import './Training.css';
import {TrainingInfo} from './TrainingInfo';
import Modal from './Modal';

export default function Training() {

  const [clicked, setClicked] = useState(false);

  const programIdx = idx => {
    if(clicked === idx) {
      return setClicked(null);
    }
    setClicked(idx);
  }

  return(
    <>
      <div className="comp-head">
        <h2>Training & Events</h2>
      </div>

      <div className="training-intro">
        <h3>Upcoming Events</h3>
        <p>Mediation Center training programs can be customized for organizations or groups.  Please contact us for more information.</p>
      </div>

      {TrainingInfo.map((item, i) => {

          return (
            <div className="program-container">

              <div className="toggle" onClick={() => programIdx(i)} key={i}>
                <div className="left">
                  <h3>{item.title}</h3> 
                  <p>{item.date}</p>
                </div>
                <div className="plus_minus">{clicked === i  ?"-" : "+" }</div>
              </div>
              
              {clicked === i ? (
              <div className="details">
                {
                  item.hasOwnProperty('credit_one') ? 
                    <>
                      <h4>Professional Credits: </h4>
                      <ul>
                        <li>{item.credit_one}</li>
                        <li>{item.credit_two}</li>
                      </ul> 
                    </>
                    : ''
                }
                <><h4>Summary: </h4><h5> (click register for more details)</h5></>
                <p>{item.details}</p>
                <a href={item.reg_link} target="_blank"><button className="reg_btn">REGISTER</button></a>
              </div>
              ) : null }

            </div>
          )

        }
      )}

      <Modal></Modal>
    </>
  )
}