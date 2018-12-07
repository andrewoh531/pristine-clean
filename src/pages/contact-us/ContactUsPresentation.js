import React, { Component } from 'react'
import { validate } from 'email-validator'
import axios from 'axios'
import styled from 'styled-components'
import './ContactUs.css'
import { EnquiryContext } from '../../components/Context'

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

const Label = styled.div`
  margin-top: 1.2rem;
  padding-left: 0.3rem;
  font-weight: 600;
  font-size: 1rem;
`

const Input = styled.input`
  height: 35px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
  font-family: 'Raleway', sans-serif;
  font-weight: 200;
  font-size: 0.9em;
  padding-left: 12px;
  box-sizing: border-box;
`

const TextArea = styled.textarea`
  height: 8em;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 100%;
  font-family: 'Raleway', sans-serif;
  font-weight: 200;
  font-size: 0.9em;
  padding-left: 12px;
  box-sizing: border-box;
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

  componentDidUpdate = () => {
    if (this.context.shouldBeUsed) {
      this.context.setContext({ shouldBeUsed: false })
      this.setState({
        enquiry: `${this.context.cleaningType} cleaning for ${this.context.bedrooms} and ${this.context.bathrooms}.

Suburb:
Enquiry:`,
      })
    }
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
          <Label>Name</Label>
          <Input
            name="name"
            type="text"
            value={name}
            onChange={this.handleChange}
            onBlur={this.handleNameBlur}
          />

          <Label>Email</Label>
          <Input
            name="email"
            type="email"
            value={email}
            onChange={this.handleChange}
          />

          <Label>Mobile Number</Label>
          <Input
            name="mobile"
            type="text"
            value={mobile}
            onChange={this.handleChange}
          />

          <Label>Enquiry</Label>
          <TextArea
            name="enquiry"
            type="text"
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

ContactUsPresentation.contextType = EnquiryContext

export default ContactUsPresentation
