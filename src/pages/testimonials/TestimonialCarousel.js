import React, { Component } from 'react'
import Slider from 'react-slick'
import Testimonial from './Testimonial'
import testimonialsJson from './testimonials.json'
import './Testimonials.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function PrevArrow({ onClick }) {
  return (
    <button onClick={onClick} className="slick-prev" style={{ left: 0 }}>
      Prev
    </button>
  )
}

function NextArrow({ onClick }) {
  return (
    <button onClick={onClick} className="slick-next" style={{ right: 0 }}>
      Next
    </button>
  )
}

const options = {
  autoplay: true,
  autoplaySpeed: 6000,
  dots: true,
  infinite: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  responsive: [
    { breakpoint: 550, settings: { slidesToShow: 1 } },
    { breakpoint: 750, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    { breakpoint: 100000, settings: { slidesToShow: 1, slidesToScroll: 1 } },
  ],
}

class TestimonialCarousel extends Component {
  render() {
    return (
      <div className="testimonials-container section">
        <div className="section-heading">Testimonials</div>
        <Slider {...options}>
          {testimonialsJson.map(t => (
            <div key={t.name}>
              {/* Placeholder: Add customer photo/avatar here in the future */}
              <Testimonial name={t.name} text={t.text} date={t.date} />
              {/* Placeholder: Optionally display customer location here */}
            </div>
          ))}
        </Slider>
        <div className="testimonial-cta" style={{textAlign: 'center', marginTop: '2rem'}}>
          <strong>Ready to experience the difference?</strong><br />
          <a href="#contact-us" className="cta-button" style={{
            display: 'inline-block',
            background: '#039BE5', // calmer blue
            color: '#fff',
            padding: '0.75em 2em',
            borderRadius: '4px',
            textDecoration: 'none',
            fontWeight: 600,
            fontSize: '1.1em',
            marginTop: '1em',
            boxShadow: '0 2px 8px rgba(0,0,0,0.07)'
          }}>
            Request Your Free Quote
          </a>
        </div>
      </div>
    )
  }
}

export default TestimonialCarousel
