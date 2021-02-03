import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {

  const initialValues = {
    name: '',
    email: '',
    message: ''
  }

  const [values, setValues] = useState(initialValues)

  const handleChange = e => {
    const {name, value} = e.target;

    setValues({
      ...values,
      [name]: value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    const params = {
      from_name: values.name,
      from_email: values.email,
      to_name: 'James Lee',
      message_html: values.message
    }
    emailjs.send(
      'gmail',
      'template_idl0kkm',
      params,
      'user_3Uzgl9UyrBZUR4uRThNjT'
    )
    .then(res => {
      if(res.text == "OK"){
        alert('Email was sent!')
      }
      else {
        console.log('WHOOPS email sending error')
      }
    })
    resetForm()
  }

  const resetForm = () => {
    setValues({
      ...values,
      name: '',
      email: '',
      message: ''
    })
  }

  return (
    <div className="contact-container">
      <section className="contact-form-sect">
        <div className="comp-head">
          <h2>Contact Us</h2>
        </div>
        <h3>We'd love to hear from you</h3>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="u-name">NAME</label>
          <input id="u-name" type="text" name="name" value={values.name} required onChange={handleChange}/>
          <label htmlFor="email">EMAIL</label>
          <input type="email" id="email" name="email" value={values.email} required onChange={handleChange}/>
          <label htmlFor="message">MESSAGE</label>
          <textarea id="message" rows="10"  type="text" value={values.message} required onChange={handleChange} name="message"/>
          <button type="submit" className="contact-btn">SUBMIT</button>
        </form>
      </section>

      <div className="contact-info">
        <a href="https://www.google.co.in/maps?q=7400+Lyndale+Avenue+South+Minneapolis,+MN+55423" className="address" target="_blank">7400 Lyndale Avenue South<br></br>Minneapolis, MN 55423</a>
        <p className="phone-num">612-237-6505</p>
      </div>
    </div>
  )
}

export default Contact;
