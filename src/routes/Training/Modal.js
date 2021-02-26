import React, { useState } from 'react';
import ReactDom from 'react-dom';
import './Training.css';

export default function Modal() {

  const [isClosed, setIsClosed] = useState(false);

  if(isClosed) return null

  return ReactDom.createPortal(
    <>
      <div className="modal-container" />
      <div className="alert-msg">
        <button className="btn-x" onClick={() => setIsClosed(true)}>X</button>
        <span>COVID-19 RESPONSE:  </span>Due to state restrictions, all training classes will be offered online.  Please contact us with any questions or concerns.
        <br></br>
        <p>Updated: 08/2020</p>
      </div>
    </>,
    document.getElementById('portal')
  )
}