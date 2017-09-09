import React, { Component } from 'react';
import QuoteIndicator from '../../components/quote-indicator';
import './Intro.css';

class Intro extends Component {
  render() {
    return (
      <div className="intro">
        <div className="intro-background col-xs-12"/>

        <div className="contact-us">0426 263 338</div>

        <div className="logo">

          <div className="pristine-clean-title col-xs-12">Pristine Clean</div>
          <span className="punch-line">Relax</span>
          <br/>
          <span className="punch-line">Leave the cleaning to us</span>
        </div>

      </div>
    );
  }
}

export default Intro;
