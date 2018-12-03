import React, { Component } from 'react'
import PropTypes from 'prop-types'

class FaqInstance extends Component {
  render() {
    const { question, answer } = this.props

    return (
      <div className="section-content-margin">
        <div className="faq-question">{question}</div>
        <div className="faq-answer">{answer}</div>
      </div>
    )
  }
}

FaqInstance.propTypes = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
}

export default FaqInstance
