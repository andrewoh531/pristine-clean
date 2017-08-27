import React, { Component } from 'react';
import BulletPoint from './BulletPoint';
import differencesJson from './differences.json';

class OurDifference extends Component {
  render() {
    return (
      <div className="our-difference-container section">
        <div className="section-heading">Why Us?</div>
        <div className="points-container">
          {
            differencesJson.map(item => <div key={item.heading}><BulletPoint heading={item.heading} text={item.text}/></div>)
          }
        </div>
      </div>
    );
  }
}

export default OurDifference;
