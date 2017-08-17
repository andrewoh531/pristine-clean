import React, { Component } from 'react';
import FaqInstance from './FaqInstance';
import faqsJson from './faqs.json';
import './Faq.css';


class Faq extends Component {
  render() {
    return (
      <div className="section">
        <div className="section-heading">Frequency Asked Questions</div>

        {
          faqsJson.map(faq => <div key={faq.question}><FaqInstance question={faq.question} answer={faq.answer}/></div>)
        }

      </div>
    );
  }
}

export default Faq;
