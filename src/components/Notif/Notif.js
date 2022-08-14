import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-free-solid';
import img from '../../assets/images/products/jewellery-1.jpg';
import './Notif.css';

const Notif = () => {
  const [toggleClose, setToggleClose] = useState(false);

  const handleClose = () => {
    setToggleClose(!toggleClose);
  };
  return (
    <div
      class={toggleClose ? 'notification-toast closed' : 'notification-toast'}
      data-toast
    >
      <button class="toast-close-btn" data-toast-close>
        <FontAwesomeIcon
          icon={faTimes}
          className="icon"
          onClick={handleClose}
        />
      </button>

      <div class="toast-banner">
        <img src={img} alt="Rose Gold Earrings" width="80" height="70" />
      </div>

      <div class="toast-detail">
        <p class="toast-message">Someone in egypt just bought</p>

        <p class="toast-title">Rose Gold Earrings</p>

        <p class="toast-meta">
          <time datetime="PT2M">2 Minutes</time> ago
        </p>
      </div>
    </div>
  );
};

export default Notif;
