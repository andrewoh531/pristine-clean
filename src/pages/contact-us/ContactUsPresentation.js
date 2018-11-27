import React, { Component } from 'react';
import {validate} from 'email-validator';
import './ContactUs.css';
import axios from 'axios';

import styled from 'styled-components';

/**
 * Type of clean
 *  property type
 *  number of rooms
 *  number of bathrooms
 *
 */

// .enquiry-form-input {
//   height: 8em;
//   margin-top: 1em;
//   border-radius: 4px;
//   border: 1px solid #ccc;
//   width: 100%;
//   font-family: 'Raleway', sans-serif;
//   font-weight: 200;
//   font-size: 0.9em;
//   padding-left: 12px;
//   box-sizing: border-box;
// }

const Wrapper = styled.div`
  max-width: 50rem;
  margin: 0 auto;
`;

const initialState = {
  name: '',
  mobile: '',
  email: '',
  enquiry: '',
  submitting: false
};

class ContactUsPresentation extends Component {

  constructor(props) {
    super(props);
    this.state = initialState;

    // this.handleChange = this.handleChange.bind(this);
    // this.handleNameBlur = this.handleNameBlur.bind(this);
    // this.handleEmailBlur = this.handleEmailBlur.bind(this);
    // this.handleMobileBlur = this.handleMobileBlur.bind(this);
    // this.handleEnquiryBlur = this.handleEnquiryBlur.bind(this);
    // this.isValidEmail = this.isValidEmail.bind(this);
    // this.shouldDisableButton = this.shouldDisableButton.bind(this);
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }

  // handleNameBlur(event) {

  // }

  // handleMobileBlur(event) {

  // }

  // handleEmailBlur(event) {

  // }

  // handleEnquiryBlur(event) {

  // }

  isValidEmail = () => {
    return validate(this.state.email);
  }

  shouldDisableButton = () => {
    if (!this.state.name) {
      return true;
    }
    if (!this.state.mobile) {
      return true;
    }
    if (!this.state.enquiry) {
      return true;
    }

    return !this.isValidEmail();
  }

  submitHandler = (a,b,c,d) => {

    this.setState({submitting: true});

    axios.post('https://5xw1f0lv99.execute-api.ap-northeast-1.amazonaws.com/Prod/email',
      {
          name: this.state.name,
          from: this.state.email,
          mobile: this.state.mobile,
          message: this.state.enquiry
      })
      .then(res => {
        console.log(`success? = ${JSON.stringify(res)}`);
        this.setState(initialState);
        alert('Enquiry successfully sent');
      })
      .catch(err => {
        console.log(`error = ${JSON.stringify(err)}`);
      });
  };

  // resetState = () => {
  //   this.setState({[event.target.name]: event.target.value});
  // }

  render() {

    const {name, email, mobile, enquiry} = this.state;

    return (
      <Wrapper>
        <form  method="post" className="form-horizontal">
          <input name="name" type="text" placeholder="Name" className="form-input" value={name} onChange={this.handleChange} onBlur={this.handleNameBlur}/>
          <input name="email" type="email" placeholder="youremail@domain.com" className="form-input" value={email} onChange={this.handleChange}/>
          <input name="mobile" type="text" placeholder="Mobile" className="form-input" value={mobile} onChange={this.handleChange}/>
          <textarea name="enquiry" type="text" placeholder="Enquiry message" className="enquiry-form-input" value={enquiry} onChange={this.handleChange}></textarea>
          <button disabled={this.shouldDisableButton()} id="send-email-button" type="button" data-loading-text="Sending..." className="button" onClick={this.submitHandler}>Send enquiry</button>
        </form>
      </Wrapper>
    );
  }
}

export default ContactUsPresentation;
