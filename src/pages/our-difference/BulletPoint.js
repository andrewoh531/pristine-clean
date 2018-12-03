import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './OurDifference.css'

class BulletPoint extends Component {
  render() {
    const { heading, text } = this.props
    return (
      <div className="bullet-point-container">
        <div className="heading">{heading}</div>
        <span className="text">{text}</span>
      </div>
    )
  }
}

BulletPoint.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default BulletPoint
