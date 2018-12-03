import React, { Component } from 'react'
import { validate } from 'email-validator'
import axios from 'axios'
import styled from 'styled-components'
import './ContactUs.css'

const Wrapper = styled.div`
  max-width: 50rem;
  margin: 0 auto;
`

const SuccessMessage = styled.div`
  background-color: #5bd776;
  width: 100%;
  border-radius: 0.3rem;
  border: 1px solid transparent;
  text-align: center;
  padding: 0.3rem 0;

  margin-top: 2rem;
  color: #fff;
  display: ${props => (props.isVisible ? 'block' : 'none')};
`

const initialState = {
  name: '',
  mobile: '',
  email: '',
  enquiry: '',
  submitting: false,
  isEnquirySent: false,
}

class ContactUsPresentation extends Component {
  constructor(props) {
    super(props)
    this.state = initialState
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  isValidEmail = () => {
    return validate(this.state.email)
  }

  shouldDisableButton = () => {
    if (!this.state.name) {
      return true
    }
    if (!this.state.mobile) {
      return true
    }
    if (!this.state.enquiry) {
      return true
    }
    if (this.state.submitting) {
      return true
    }

    return !this.isValidEmail()
  }

  submitHandler = (a, b, c, d) => {
    this.setState({ submitting: true })

    axios
      .post(
        'https://5xw1f0lv99.execute-api.ap-northeast-1.amazonaws.com/Prod/email',
        {
          name: this.state.name,
          from: this.state.email,
          mobile: this.state.mobile,
          message: this.state.enquiry,
        }
      )
      .then(res => {
        console.log(`success? = ${JSON.stringify(res)}`)
        this.setState(Object.assign({}, initialState, { isEnquirySent: true }))
      })
      .catch(err => {
        console.log(`error = ${JSON.stringify(err)}`)
      })
  }

  render() {
    const { name, email, mobile, enquiry, isEnquirySent } = this.state
    const buttonLabel = this.state.submitting ? 'Sending...' : 'Send enquiry'

    return (
      <Wrapper>
        <SuccessMessage isVisible={isEnquirySent}>Enquiry sent!</SuccessMessage>
        <form method="post" className="form-horizontal">
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="form-input"
            value={name}
            onChange={this.handleChange}
            onBlur={this.handleNameBlur}
          />
          <input
            name="email"
            type="email"
            placeholder="youremail@domain.com"
            className="form-input"
            value={email}
            onChange={this.handleChange}
          />
          <input
            name="mobile"
            type="text"
            placeholder="Mobile"
            className="form-input"
            value={mobile}
            onChange={this.handleChange}
          />
          <textarea
            name="enquiry"
            type="text"
            placeholder="Enquiry message"
            className="enquiry-form-input"
            value={enquiry}
            onChange={this.handleChange}
          />
          <button
            disabled={this.shouldDisableButton()}
            id="send-email-button"
            type="button"
            data-loading-text="Sending..."
            className="button"
            onClick={this.submitHandler}
          >
            {buttonLabel}
          </button>
        </form>
      </Wrapper>
    )
  }
}

export default ContactUsPresentation
