/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faShoppingBag,
  faHome,
  faHeart,
  faTable,
  faTimes,
  faPlus,
  faMinus,
  faCaretLeft,
} from '@fortawesome/fontawesome-free-solid';
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { gridActions } from '../../store/gridSlice';
import './Mobile.css';

const Mobile = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [togglePlus1, setTogglePlus1] = useState(false);
  const [togglePlus2, setTogglePlus2] = useState(false);
  const [togglePlus3, setTogglePlus3] = useState(false);
  const [togglePlus4, setTogglePlus4] = useState(false);
  const [toggleCaret1, setToggleCaret1] = useState(false);
  const [toggleCaret2, setToggleCaret2] = useState(false);

  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const handlePlus1 = () => {
    setTogglePlus1(!togglePlus1);
  };
  const handlePlus2 = () => {
    setTogglePlus2(!togglePlus2);
  };
  const handlePlus3 = () => {
    setTogglePlus3(!togglePlus3);
  };
  const handlePlus4 = () => {
    setTogglePlus4(!togglePlus4);
  };

  const handleCaret1 = () => {
    setToggleCaret1(!toggleCaret1);
  };
  const handleCaret2 = () => {
    setToggleCaret2(!toggleCaret2);
  };

  const dispatch = useDispatch();

  const handleGrid = () => {
    dispatch(gridActions.toggleGrid());
  };

  return (
    <div>
      <div className="mobile-bottom-navigation">
        <button
          className="action-btn"
          data-mobile-menu-open-btn
          onClick={handleMenu}
        >
          <FontAwesomeIcon
            icon={faBars}
            className="icon"
            onClick={handleMenu}
          />
        </button>

        <button className="action-btn">
          <FontAwesomeIcon icon={faShoppingBag} className="icon" />

          <span className="count">0</span>
        </button>

        <button className="action-btn">
          <FontAwesomeIcon icon={faHome} className="icon" />
        </button>

        <button className="action-btn">
          <FontAwesomeIcon icon={faHeart} className="icon" />

          <span className="count">0</span>
        </button>

        <button className="action-btn" data-mobile-menu-open-btn>
          <FontAwesomeIcon
            icon={faTable}
            className="icon"
            onClick={handleGrid}
          />
        </button>
      </div>

      <nav
        className={
          toggleMenu
            ? 'mobile-navigation-menu  has-scrollbar active'
            : 'mobile-navigation-menu  has-scrollbar '
        }
        data-mobile-menu
      >
        <div className="menu-top">
          <h2 className="menu-title">Menu</h2>

          <button className="menu-close-btn" data-mobile-menu-close-btn>
            <FontAwesomeIcon
              icon={faTimes}
              className="icon"
              onClick={handleMenu}
            />
          </button>
        </div>

        <ul className="mobile-menu-category-list">
          <li className="menu-category">
            <a href="#" className="menu-title">
              Home
            </a>
          </li>

          <li className="menu-category">
            <button
              className={
                togglePlus1 ? 'accordion-menu active' : 'accordion-menu '
              }
              data-accordion-btn
            >
              <p className="menu-title">Men's</p>

              <div>
                <FontAwesomeIcon
                  icon={faPlus}
                  className="icon add-icon"
                  onClick={handlePlus1}
                />
                <FontAwesomeIcon
                  icon={faMinus}
                  className="icon remove-icon"
                  onClick={handlePlus1}
                />
              </div>
            </button>

            <ul
              className={
                togglePlus1
                  ? 'submenu-category-list active'
                  : 'submenu-category-list '
              }
              data-accordion
            >
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Shirt
                </a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Shorts & Jeans
                </a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Safety Shoes
                </a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Wallet
                </a>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <button
              className={
                togglePlus2 ? 'accordion-menu active' : 'accordion-menu '
              }
              data-accordion-btn
            >
              <p className="menu-title">Women's</p>

              <div>
                <FontAwesomeIcon
                  icon={faPlus}
                  className="icon add-icon"
                  onClick={handlePlus2}
                />
                <FontAwesomeIcon
                  icon={faMinus}
                  className="icon remove-icon"
                  onClick={handlePlus2}
                />
              </div>
            </button>

            <ul
              className={
                togglePlus2
                  ? 'submenu-category-list active'
                  : 'submenu-category-list '
              }
              data-accordion
            >
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Dress & Frock
                </a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Earrings
                </a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Necklace
                </a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Makeup Kit
                </a>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <button
              className={
                togglePlus3 ? 'accordion-menu active' : 'accordion-menu '
              }
              data-accordion-btn
            >
              <p className="menu-title">Jewelry</p>

              <div>
                <FontAwesomeIcon
                  icon={faPlus}
                  className="icon add-icon"
                  onClick={handlePlus3}
                />
                <FontAwesomeIcon
                  icon={faMinus}
                  className="icon remove-icon"
                  onClick={handlePlus3}
                />
              </div>
            </button>

            <ul
              className={
                togglePlus3
                  ? 'submenu-category-list active'
                  : 'submenu-category-list '
              }
              data-accordion
            >
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Earrings
                </a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Couple Rings
                </a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Necklace
                </a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Bracelets
                </a>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <button
              className={
                togglePlus4 ? 'accordion-menu active' : 'accordion-menu '
              }
              data-accordion-btn
            >
              <p className="menu-title">Perfume</p>

              <div>
                <FontAwesomeIcon
                  icon={faPlus}
                  className="icon add-icon"
                  onClick={handlePlus4}
                />
                <FontAwesomeIcon
                  icon={faMinus}
                  className="icon remove-icon"
                  onClick={handlePlus4}
                />
              </div>
            </button>

            <ul
              className={
                togglePlus4
                  ? 'submenu-category-list active'
                  : 'submenu-category-list '
              }
              data-accordion
            >
              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Clothes Perfume
                </a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Deodorant
                </a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Flower Fragrance
                </a>
              </li>

              <li className="submenu-category">
                <a href="#" className="submenu-title">
                  Air Freshener
                </a>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <a href="#" className="menu-title">
              Blog
            </a>
          </li>

          <li className="menu-category">
            <a href="#" className="menu-title">
              Hot Offers
            </a>
          </li>
        </ul>

        <div className="menu-bottom">
          <ul className="menu-category-list">
            <li className="menu-category">
              <button
                className={
                  toggleCaret1 ? 'accordion-menu active' : 'accordion-menu '
                }
                data-accordion-btn
              >
                <p className="menu-title">Language</p>
                <FontAwesomeIcon
                  icon={faCaretLeft}
                  className="icon caret-back"
                  onClick={handleCaret1}
                />
              </button>

              <ul
                className={
                  toggleCaret1
                    ? 'submenu-category-list active'
                    : 'submenu-category-list '
                }
                data-accordion
              >
                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    English
                  </a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Espa&ntilde;ol
                  </a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    Fren&ccedil;h
                  </a>
                </li>
              </ul>
            </li>

            <li className="menu-category">
              <button
                className={
                  toggleCaret2 ? 'accordion-menu active' : 'accordion-menu '
                }
                data-accordion-btn
              >
                <p className="menu-title">Currency</p>
                <FontAwesomeIcon
                  icon={faCaretLeft}
                  className="icon caret-back"
                  onClick={handleCaret2}
                />
              </button>

              <ul
                className={
                  toggleCaret2
                    ? 'submenu-category-list active'
                    : 'submenu-category-list '
                }
                data-accordion
              >
                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    USD &dollar;
                  </a>
                </li>

                <li className="submenu-category">
                  <a href="#" className="submenu-title">
                    EUR &euro;
                  </a>
                </li>
              </ul>
            </li>
          </ul>

          <ul className="menu-social-container">
            <li>
              <a href="#" className="social-link">
                <FontAwesomeIcon icon={faFacebook} className="icon " />
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <FontAwesomeIcon icon={faTwitter} className="icon " />
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <FontAwesomeIcon icon={faInstagram} className="icon " />
              </a>
            </li>

            <li>
              <a href="#" className="social-link">
                <FontAwesomeIcon icon={faLinkedin} className="icon " />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Mobile;
