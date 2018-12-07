import React, { Component } from 'react'
import Intro from './sections/Intro'
import Testimonials from './testimonials/TestimonialCarousel'
import OurDifference from './our-difference/OurDifference'
import OurServices from './our-services/OurServices'
import Faq from './faq/Faq'
import ContactUs from './contact-us/ContactUs'
import './App.css'
import PriceIndicator from './sections/price-indicator'

import Layout from '../components/layout'
import Context from '../components/Context'

class App extends Component {
  render() {
    return (
      <Layout>
        <Context>
          <Intro />
          <Testimonials />
          <OurDifference />
          <OurServices />
          <PriceIndicator />
          <Faq />
          <ContactUs />
        </Context>
      </Layout>
    )
  }
}

export default App
