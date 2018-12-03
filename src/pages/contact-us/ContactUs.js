import React from 'react'
import ContactUsPresentation from './ContactUsPresentation'
import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 50rem;
`

const Text = styled.div`
  text-align: center;
`

const ContactUs = () => (
  <Wrapper className="section">
    <div id="contact-us" className="section-heading">
      Contact Us
    </div>
    <Text>
      For more information or a free quote call or text Thomas directly on 0426
      263 338. Or email us below.
    </Text>
    <ContactUsPresentation />
  </Wrapper>
)

export default ContactUs
