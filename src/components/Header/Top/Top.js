/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import './Top.css';

const Top = () => {
  return (
    <div className="header-top">
      <div className="container">
        <ul className="header-social-container">
          <li>
            <a href="#" className="social-link">
              <FontAwesomeIcon icon={faFacebook} className="icon" />
            </a>
          </li>

          <li>
            <a href="#" className="social-link">
              <FontAwesomeIcon icon={faTwitter} className="icon" />
            </a>
          </li>

          <li>
            <a href="#" className="social-link">
              <FontAwesomeIcon icon={faInstagram} className="icon" />
            </a>
          </li>

          <li>
            <a href="#" className="social-link">
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
          </li>
        </ul>

        <div className="header-alert-news">
          <p>
            <b>Free Shipping</b>
            This Week Order Over - $55
          </p>
        </div>

        <div className="header-top-actions">
          <select name="currency">
            <option value="usd">USD &dollar;</option>
            <option value="eur">EUR &euro;</option>
          </select>

          <select name="language">
            <option value="en-US">English</option>
            <option value="es-ES">Espa&ntilde;ol</option>
            <option value="fr">Fran&ccedil;ais</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Top;
