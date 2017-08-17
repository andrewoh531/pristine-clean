import React, { Component } from 'react';
import Slider from 'react-slick';
import Testimonial from './Testimonial';
import testimonialsJson from './testimonials.json';
import './Testimonials.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function PrevArrow({ onClick }) {
  return <button onClick={onClick} className="slick-prev" style={{ left: 0 }}>Prev</button>;
}

function NextArrow({ onClick }) {
  return <button onClick={onClick} className="slick-next" style={{ right: 0 }}>Next</button>;
}

const options = {
  autoplay: true,
  autoplaySpeed: 6000,
  dots: true,
  infinite: true,
  nextArrow: <NextArrow/>,
  prevArrow: <PrevArrow/>,
  responsive: [
    { breakpoint: 550, settings: { slidesToShow: 1 } },
    { breakpoint: 750, settings: { slidesToShow: 2, slidesToScroll: 2 } },
    { breakpoint: 100000, settings: { slidesToShow: 3, slidesToScroll: 3 } }]
};

class TestimonialCarousel extends Component {
  render() {
    return (
      <div className="testimonials-container section">
        <div className="section-heading">Customer's feedback</div>
        <Slider {...options}>
          {
            testimonialsJson.map(t => <div key={t.name}><Testimonial name={t.name} text={t.text} date={t.date}/></div>)
          }
        </Slider>
      </div>
    );
  }
}

export default TestimonialCarousel;