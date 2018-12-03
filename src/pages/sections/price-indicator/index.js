import React, { Component } from 'react'
import Indicator from './price-indicator'

class PriceIndicator extends Component {
  render() {
    return (
      <div className="section">
        <div className="section-heading">Price Indicator</div>
        <Indicator />
      </div>
    )
  }
}

export default PriceIndicator
