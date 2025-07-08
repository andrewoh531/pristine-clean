import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Testimonials.css'

class Testimonial extends Component {
  render() {
    const { name, text } = this.props
    return (
      <div className="testimonial">
        <div className="reviewer">{name}</div>
        <span className="blockquote">{text}</span>
      </div>
    )
  }
}

Testimonial.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Testimonial
