import React, { Component } from 'react';

class FaqInstance extends Component {
  render() {
    const {question, answer} = this.props;

    return (
      <div className="section-content-margin">
        <div className="faq-question">{question}</div>
        <div className="faq-answer">{answer}</div>
      </div>
    );
  }
}


FaqInstance.propTypes = {
  question: React.PropTypes.string.isRequired,
  answer: React.PropTypes.string.isRequired
};

export default FaqInstance;
