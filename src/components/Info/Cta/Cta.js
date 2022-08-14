/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import cta from '../../../assets/images/cta-banner.jpg';
import './Cta.css';

const Cta = () => {
  return (
    <div class="cta-container">
      <img src={cta} alt="summer collection" class="cta-banner" />

      <a href="#" class="cta-content">
        <p class="discount">25% Discount</p>

        <h2 class="cta-title">Summer collection</h2>

        <p class="cta-text">Starting @ $10</p>

        <button class="cta-btn">Shop now</button>
      </a>
    </div>
  );
};

export default Cta;
