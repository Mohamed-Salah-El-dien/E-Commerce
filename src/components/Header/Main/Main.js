/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSearch,
  faHeart,
  faShoppingBag,
  faUserCircle,
} from '@fortawesome/fontawesome-free-solid';
import './Main.css';

const Main = () => {
  return (
    <div className="header-main">
      <div className="container">
        <div className="header-search-container">
          <input
            type="search"
            name="search"
            className="search-field"
            placeholder="Enter your product name..."
          />

          <button className="search-btn">
            <FontAwesomeIcon icon={faSearch} className="icon" />
          </button>
        </div>

        <div className="header-user-actions">
          <button className="action-btn">
            <FontAwesomeIcon icon={faUserCircle} className="icon" />
          </button>

          <button className="action-btn">
            <FontAwesomeIcon icon={faHeart} className="icon" />
            <span className="count">0</span>
          </button>

          <button className="action-btn">
            <FontAwesomeIcon icon={faShoppingBag} className="icon" />
            <span className="count">0</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
