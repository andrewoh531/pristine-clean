import React, { Component } from 'react';
import Intro from './intro/Intro';
import Testimonials from './testimonials/TestimonialCarousel';
import OurDifference from './our-difference/OurDifference';
import OurServices from './our-services/OurServices';
import Faq from './faq/Faq';
import ContactUs from './contact-us/ContactUs';
import './App.css';
//import AboutUs from '../about-us/AboutUs';

class App extends Component {
  render() {
    return (
      <div id="App" className="app-container">
        <Intro/>
        <Testimonials/>
        <OurDifference/>
        <OurServices/>
        <Faq/>
        <ContactUs/>
      </div>
    );
  }
}

export default App;
