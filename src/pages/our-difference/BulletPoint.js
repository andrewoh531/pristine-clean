import React, { Component } from 'react';
import './OurDifference.css';

class BulletPoint extends Component {
  render() {
    const {heading, text} = this.props;
    return (
      <div className="bullet-point-container">
        <div className="heading">{heading}</div>
        <span className="text">
          {text}
        </span>
      </div>
    );
  }
}


BulletPoint.propTypes = {
  heading: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired
};

export default BulletPoint;
