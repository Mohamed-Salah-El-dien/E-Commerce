import React from 'react';
import test1 from '../../../assets/images/testimonial-1.jpg';
import quotes from '../../../assets/images/icons/quotes.svg';
import './Test.css';

const Test = () => {
  return (
    <div className="testimonial">
      <h2 className="title">testimonial</h2>

      <div className="testimonial-card">
        <img
          src={test1}
          alt="alan doe"
          className="testimonial-banner"
          width="80"
          height="80"
        />

        <p className="testimonial-name">Alan Doe</p>

        <p className="testimonial-title">CEO & Founder Invision</p>

        <img
          src={quotes}
          alt="quotation"
          className="quotation-img"
          width="26"
        />

        <p className="testimonial-desc">
          Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor dolor sit
          amet.
        </p>
      </div>
    </div>
  );
};

export default Test;
