import React, { Component } from 'react';
import {validate} from 'email-validator';
import './ContactUs.css';
import axios from 'axios';

import styled from 'styled-components';


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
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  }


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
    if (this.state.submitting) {
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

  getSendButtonLabel = () => {
    if (this.state.submitting) {
      return 'Sending...';
    }

    return 'Send enquiry';
  }

  render() {

    const {name, email, mobile, enquiry} = this.state;

    return (
      <Wrapper>
        <form  method="post" className="form-horizontal">
          <input name="name" type="text" placeholder="Name" className="form-input" value={name} onChange={this.handleChange} onBlur={this.handleNameBlur}/>
          <input name="email" type="email" placeholder="youremail@domain.com" className="form-input" value={email} onChange={this.handleChange}/>
          <input name="mobile" type="text" placeholder="Mobile" className="form-input" value={mobile} onChange={this.handleChange}/>
          <textarea name="enquiry" type="text" placeholder="Enquiry message" className="enquiry-form-input" value={enquiry} onChange={this.handleChange}></textarea>
          <button disabled={this.shouldDisableButton()} id="send-email-button" type="button" data-loading-text="Sending..." className="button" onClick={this.submitHandler}>{this.getSendButtonLabel()}</button>
        </form>
      </Wrapper>
    );
  }
}

export default ContactUsPresentation;
