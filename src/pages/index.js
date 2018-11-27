import React, { Component } from 'react';
import Intro from './intro/Intro';
import Testimonials from './testimonials/TestimonialCarousel';
import OurDifference from './our-difference/OurDifference';
import OurServices from './our-services/OurServices';
import Faq from './faq/Faq';
import ContactUs from './contact-us/ContactUs';
import './App.css';
import PriceIndicator from './price-indicator';

import Layout from '../components/layout'
//import AboutUs from '../about-us/AboutUs';

class App extends Component {
  render() {
    return (
      <Layout>
        <Intro/>
        <Testimonials/>
        <OurDifference/>
        <OurServices/>
        <PriceIndicator/>
        <Faq/>
        <ContactUs/>
      </Layout>
    );
  }
}

export default App;
