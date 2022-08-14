import React from 'react';
import Test from './Test/Test';
import Cta from './Cta/Cta';
import Services from './Services/Services';
import './Info.css';

const Info = () => {
  return (
    <div>
      <div class="container">
        <div class="testimonials-box">
          <Test />
          <Cta />
          <Services />
        </div>
      </div>
    </div>
  );
};

export default Info;
