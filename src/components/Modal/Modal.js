import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/fontawesome-free-solid';
import letter from '../../assets/images/newsletter.png';
import './Modal.css';

const Modal = () => {
  const [toggleClose, setToggleClose] = useState(false);

  const handleClose = () => {
    setToggleClose(!toggleClose);
  };

  return (
    <div>
      <div className="overlay" data-overlay></div>

      <div className={toggleClose ? 'modal closed' : 'modal'} data-modal>
        <div
          className="modal-close-overlay"
          data-modal-overlay
          onClick={handleClose}
        ></div>

        <div className="modal-content">
          <button className="modal-close-btn" data-modal-close>
            <FontAwesomeIcon
              icon={faTimes}
              className="icon"
              onClick={handleClose}
            />
          </button>

          <div className="newsletter-img">
            <img
              src={letter}
              alt="subscribe newsletter"
              width="400"
              height="400"
            />
          </div>

          <div className="newsletter">
            <form action="#">
              <div className="newsletter-header">
                <h3 className="newsletter-title">Subscribe Newsletter.</h3>

                <p className="newsletter-desc">
                  Subscribe the <b>Anon</b> to get latest products and discount
                  update.
                </p>
              </div>

              <input
                type="email"
                name="email"
                className="email-field"
                placeholder="Email Address"
                required
              />

              <button type="submit" className="btn-newsletter">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
