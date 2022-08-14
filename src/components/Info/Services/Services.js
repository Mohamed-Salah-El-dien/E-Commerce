/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShip,
  faRocket,
  faPhone,
  faHandshake,
  faTicketAlt,
} from '@fortawesome/fontawesome-free-solid';
import './Services.css';

const Services = () => {
  return (
    <div className="service">
      <h2 className="title">Our Services</h2>

      <div className="service-container">
        <a href="#" className="service-item">
          <div className="service-icon">
            <FontAwesomeIcon icon={faShip} className="icon" />
          </div>

          <div className="service-content">
            <h3 className="service-title">Worldwide Delivery</h3>
            <p className="service-desc">For Order Over $100</p>
          </div>
        </a>

        <a href="#" className="service-item">
          <div className="service-icon">
            <FontAwesomeIcon icon={faRocket} className="icon" />
          </div>

          <div className="service-content">
            <h3 className="service-title">Next Day delivery</h3>
            <p className="service-desc">UK Orders Only</p>
          </div>
        </a>

        <a href="#" className="service-item">
          <div className="service-icon">
            <FontAwesomeIcon icon={faPhone} className="icon" />
          </div>

          <div className="service-content">
            <h3 className="service-title">Best Online Support</h3>
            <p className="service-desc">Hours: 8AM - 11PM</p>
          </div>
        </a>

        <a href="#" className="service-item">
          <div className="service-icon">
            <FontAwesomeIcon icon={faHandshake} className="icon" />
          </div>

          <div className="service-content">
            <h3 className="service-title">Return Policy</h3>
            <p className="service-desc">Easy & Free Return</p>
          </div>
        </a>

        <a href="#" className="service-item">
          <div className="service-icon">
            <FontAwesomeIcon icon={faTicketAlt} className="icon" />
          </div>

          <div className="service-content">
            <h3 className="service-title">30% money back</h3>
            <p className="service-desc">For Order Over $100</p>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Services;
