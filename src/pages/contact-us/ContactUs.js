import React, { Component } from 'react';
import ContactUsPresentation from './ContactUsPresentation';
import './ContactUs.css';

class ContactUs extends Component {

  render() {
    return (
      <div className="section">
        <div id="contact-us" className="section-heading">Contact Us</div>
        <div>For more information or a free quote call or text Thomas directly on 0426 263 338. Or email us below.</div>
        <ContactUsPresentation/>
      </div>
    );
  }
}

export default ContactUs;
