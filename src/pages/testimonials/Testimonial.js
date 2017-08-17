import React, { Component } from 'react';
import './Testimonials.css';

class Testimonial extends Component {
  render() {
    const {name, text, date} = this.props;
    return (
      <div className="testimonial">
        <div className="reviewer">{name}</div>
        <span className="blockquote">
          {text}
        </span>
        <div className="date">{date}</div>
      </div>
    );
  }
}


Testimonial.propTypes = {
  name: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  date: React.PropTypes.string.isRequired
};

export default Testimonial;
