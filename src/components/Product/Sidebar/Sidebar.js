/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faMinus,
  faTimes,
  faStar,
  faStarHalf,
} from '@fortawesome/fontawesome-free-solid';
import { useDispatch, useSelector } from 'react-redux';
import { gridActions } from '../../store/gridSlice';
import dress from '../../../assets/images/icons/dress.svg';
import shoes from '../../../assets/images/icons/shoes.svg';
import jewelry from '../../../assets/images/icons/jewelry.svg';
import perfume from '../../../assets/images/icons/perfume.svg';
import cosmetics from '../../../assets/images/icons/cosmetics.svg';
import glasses from '../../../assets/images/icons/glasses.svg';
import bag from '../../../assets/images/icons/bag.svg';
import img1 from '../../../assets/images/products/1.jpg';
import img2 from '../../../assets/images/products/2.jpg';
import img3 from '../../../assets/images/products/3.jpg';
import img4 from '../../../assets/images/products/4.jpg';
import './Sidebar.css';

const Sidebar = () => {
  const [togglePlus1, setTogglePlus1] = useState(false);
  const [togglePlus2, setTogglePlus2] = useState(false);
  const [togglePlus3, setTogglePlus3] = useState(false);
  const [togglePlus4, setTogglePlus4] = useState(false);
  const [togglePlus5, setTogglePlus5] = useState(false);
  const [togglePlus6, setTogglePlus6] = useState(false);
  const [togglePlus7, setTogglePlus7] = useState(false);

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
  const handlePlus5 = () => {
    setTogglePlus5(!togglePlus5);
  };
  const handlePlus6 = () => {
    setTogglePlus6(!togglePlus6);
  };
  const handlePlus7 = () => {
    setTogglePlus7(!togglePlus7);
  };

  const grid = useSelector((state) => state.grid.Grid);
  const dispatch = useDispatch();

  const handleGrid = () => {
    dispatch(gridActions.toggleGrid());
  };

  return (
    <>
      <div
        className={
          grid ? 'sidebar active has-scrollbar' : 'sidebar  has-scrollbar'
        }
        data-mobile-menu
      >
        <div className="sidebar-category">
          <div className="sidebar-top">
            <h2 className="sidebar-title">Category</h2>

            <button className="sidebar-close-btn" data-mobile-menu-close-btn>
              <FontAwesomeIcon
                icon={faTimes}
                className="icon"
                onClick={handleGrid}
              />
            </button>
          </div>

          <ul className="sidebar-menu-category-list">
            <li className="sidebar-menu-category">
              <button
                className={
                  togglePlus1
                    ? 'sidebar-accordion-menu active'
                    : 'sidebar-accordion-menu '
                }
                data-accordion-btn
              >
                <div className="menu-title-flex">
                  <img
                    src={dress}
                    alt="clothes"
                    width="20"
                    height="20"
                    className="menu-title-img"
                  />

                  <p className="menu-title">Clothes</p>
                </div>

                <div>
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="icon add-icon"
                    onClick={handlePlus1}
                  />
                  <FontAwesomeIcon
                    icon={faMinus}
                    className="icon remove-icon "
                    onClick={handlePlus1}
                  />
                </div>
              </button>

              <ul
                className={
                  togglePlus1
                    ? 'sidebar-submenu-category-list active'
                    : 'sidebar-submenu-category-list '
                }
                data-accordion
              >
                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Shirt</p>
                    <data value="300" className="stock" title="Available Stock">
                      300
                    </data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">shorts & jeans</p>
                    <data value="60" className="stock" title="Available Stock">
                      60
                    </data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">jacket</p>
                    <data value="50" className="stock" title="Available Stock">
                      50
                    </data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">dress & frock</p>
                    <data value="87" className="stock" title="Available Stock">
                      87
                    </data>
                  </a>
                </li>
              </ul>
            </li>

            <li className="sidebar-menu-category">
              <button
                className={
                  togglePlus2
                    ? 'sidebar-accordion-menu active'
                    : 'sidebar-accordion-menu '
                }
                data-accordion-btn
              >
                <div className="menu-title-flex">
                  <img
                    src={shoes}
                    alt="footwear"
                    className="menu-title-img"
                    width="20"
                    height="20"
                  />

                  <p className="menu-title">Footwear</p>
                </div>

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
                    ? 'sidebar-submenu-category-list active'
                    : 'sidebar-submenu-category-list '
                }
                data-accordion
              >
                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Sports</p>
                    <data value="45" className="stock" title="Available Stock">
                      45
                    </data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Formal</p>
                    <data value="75" className="stock" title="Available Stock">
                      75
                    </data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Casual</p>
                    <data value="35" className="stock" title="Available Stock">
                      35
                    </data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Safety Shoes</p>
                    <data value="26" className="stock" title="Available Stock">
                      26
                    </data>
                  </a>
                </li>
              </ul>
            </li>

            <li className="sidebar-menu-category">
              <button
                className={
                  togglePlus3
                    ? 'sidebar-accordion-menu active'
                    : 'sidebar-accordion-menu '
                }
                data-accordion-btn
              >
                <div className="menu-title-flex">
                  <img
                    src={jewelry}
                    alt="clothes"
                    className="menu-title-img"
                    width="20"
                    height="20"
                  />

                  <p className="menu-title">Jewelry</p>
                </div>

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
                    ? 'sidebar-submenu-category-list active'
                    : 'sidebar-submenu-category-list '
                }
                data-accordion
              >
                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Earrings</p>
                    <data value="46" className="stock" title="Available Stock">
                      46
                    </data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Couple Rings</p>
                    <data value="73" className="stock" title="Available Stock">
                      73
                    </data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Necklace</p>
                    <data value="61" className="stock" title="Available Stock">
                      61
                    </data>
                  </a>
                </li>
              </ul>
            </li>

            <li className="sidebar-menu-category">
              <button
                className={
                  togglePlus4
                    ? 'sidebar-accordion-menu active'
                    : 'sidebar-accordion-menu '
                }
                data-accordion-btn
              >
                <div className="menu-title-flex">
                  <img
                    src={perfume}
                    alt="perfume"
                    className="menu-title-img"
                    width="20"
                    height="20"
                  />

                  <p className="menu-title">Perfume</p>
                </div>

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
                    ? 'sidebar-submenu-category-list active'
                    : 'sidebar-submenu-category-list '
                }
                data-accordion
              >
                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Clothes Perfume</p>
                    <data value="12" className="stock" title="Available Stock">
                      12 pcs
                    </data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Deodorant</p>
                    <data value="60" className="stock" title="Available Stock">
                      60 pcs
                    </data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">jacket</p>
                    <data value="50" className="stock" title="Available Stock">
                      50 pcs
                    </data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">dress & frock</p>
                    <data value="87" className="stock" title="Available Stock">
                      87 pcs
                    </data>
                  </a>
                </li>
              </ul>
            </li>

            <li className="sidebar-menu-category">
              <button
                className={
                  togglePlus5
                    ? 'sidebar-accordion-menu active'
                    : 'sidebar-accordion-menu '
                }
                data-accordion-btn
              >
                <div className="menu-title-flex">
                  <img
                    src={cosmetics}
                    alt="cosmetics"
                    className="menu-title-img"
                    width="20"
                    height="20"
                  />

                  <p className="menu-title">Cosmetics</p>
                </div>

                <div>
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="icon add-icon"
                    onClick={handlePlus5}
                  />
                  <FontAwesomeIcon
                    icon={faMinus}
                    className="icon remove-icon"
                    onClick={handlePlus5}
                  />
                </div>
              </button>

              <ul
                className={
                  togglePlus5
                    ? 'sidebar-submenu-category-list active'
                    : 'sidebar-submenu-category-list '
                }
                data-accordion
              >
                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Shampoo</p>
                    <data value="68" className="stock" title="Available Stock">
                      68
                    </data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Sunscreen</p>
                    <data value="46" className="stock" title="Available Stock">
                      46
                    </data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Body Wash</p>
                    <data value="79" className="stock" title="Available Stock">
                      79
                    </data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Makeup Kit</p>
                    <data value="23" className="stock" title="Available Stock">
                      23
                    </data>
                  </a>
                </li>
              </ul>
            </li>

            <li className="sidebar-menu-category">
              <button
                className={
                  togglePlus6
                    ? 'sidebar-accordion-menu active'
                    : 'sidebar-accordion-menu '
                }
                data-accordion-btn
              >
                <div className="menu-title-flex">
                  <img
                    src={glasses}
                    alt="glasses"
                    className="menu-title-img"
                    width="20"
                    height="20"
                  />

                  <p className="menu-title">Glasses</p>
                </div>

                <div>
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="icon add-icon"
                    onClick={handlePlus6}
                  />
                  <FontAwesomeIcon
                    icon={faMinus}
                    className="icon remove-icon"
                    onClick={handlePlus6}
                  />
                </div>
              </button>

              <ul
                className={
                  togglePlus6
                    ? 'sidebar-submenu-category-list active'
                    : 'sidebar-submenu-category-list '
                }
                data-accordion
              >
                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Sunglasses</p>
                    <data value="50" className="stock" title="Available Stock">
                      50
                    </data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Lenses</p>
                    <data value="48" className="stock" title="Available Stock">
                      48
                    </data>
                  </a>
                </li>
              </ul>
            </li>

            <li className="sidebar-menu-category">
              <button
                className={
                  togglePlus7
                    ? 'sidebar-accordion-menu active'
                    : 'sidebar-accordion-menu '
                }
                data-accordion-btn
              >
                <div className="menu-title-flex">
                  <img
                    src={bag}
                    alt="bags"
                    className="menu-title-img"
                    width="20"
                    height="20"
                  />

                  <p className="menu-title">Bags</p>
                </div>

                <div>
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="icon add-icon"
                    onClick={handlePlus7}
                  />
                  <FontAwesomeIcon
                    icon={faMinus}
                    className="icon remove-icon"
                    onClick={handlePlus7}
                  />
                </div>
              </button>

              <ul
                className={
                  togglePlus7
                    ? 'sidebar-submenu-category-list active'
                    : 'sidebar-submenu-category-list '
                }
                data-accordion
              >
                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Shopping Bag</p>
                    <data value="62" className="stock" title="Available Stock">
                      62
                    </data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Gym Backpack</p>
                    <data value="35" className="stock" title="Available Stock">
                      35
                    </data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Purse</p>
                    <data value="80" className="stock" title="Available Stock">
                      80
                    </data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Wallet</p>
                    <data value="75" className="stock" title="Available Stock">
                      75
                    </data>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="product-showcase">
          <h3 className="showcase-heading">best sellers</h3>

          <div className="showcase-wrapper">
            <div className="showcase-container">
              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src={img1}
                    alt="baby fabric shoes"
                    width="75"
                    height="75"
                    className="showcase-img"
                  />
                </a>

                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">baby fabric shoes</h4>
                  </a>

                  <div className="showcase-rating">
                    <FontAwesomeIcon icon={faStar} className="icon" />
                    <FontAwesomeIcon icon={faStar} className="icon" />
                    <FontAwesomeIcon icon={faStar} className="icon" />
                    <FontAwesomeIcon icon={faStar} className="icon" />
                    <FontAwesomeIcon icon={faStar} className="icon" />
                  </div>

                  <div className="price-box">
                    <del>$5.00</del>
                    <p className="price">$4.00</p>
                  </div>
                </div>
              </div>

              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src={img2}
                    alt="men's hoodies t-shirt"
                    className="showcase-img"
                    width="75"
                    height="75"
                  />
                </a>

                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">men's hoodies t-shirt</h4>
                  </a>
                  <div className="showcase-rating">
                    <FontAwesomeIcon icon={faStar} className="icon" />
                    <FontAwesomeIcon icon={faStar} className="icon" />
                    <FontAwesomeIcon icon={faStar} className="icon" />
                    <FontAwesomeIcon icon={faStar} className="icon" />
                    <FontAwesomeIcon icon={faStarHalf} className="icon" />
                  </div>

                  <div className="price-box">
                    <del>$17.00</del>
                    <p className="price">$7.00</p>
                  </div>
                </div>
              </div>

              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src={img3}
                    alt="girls t-shirt"
                    className="showcase-img"
                    width="75"
                    height="75"
                  />
                </a>

                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">girls t-shirt</h4>
                  </a>
                  <div className="showcase-rating">
                    <FontAwesomeIcon icon={faStar} className="icon" />
                    <FontAwesomeIcon icon={faStar} className="icon" />
                    <FontAwesomeIcon icon={faStar} className="icon" />
                    <FontAwesomeIcon icon={faStar} className="icon" />
                    <FontAwesomeIcon icon={faStarHalf} className="icon" />
                  </div>

                  <div className="price-box">
                    <del>$5.00</del>
                    <p className="price">$3.00</p>
                  </div>
                </div>
              </div>

              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src={img4}
                    alt="woolen hat for men"
                    className="showcase-img"
                    width="75"
                    height="75"
                  />
                </a>

                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">woolen hat for men</h4>
                  </a>
                  <div className="showcase-rating">
                    <FontAwesomeIcon icon={faStar} className="icon" />
                    <FontAwesomeIcon icon={faStar} className="icon" />
                    <FontAwesomeIcon icon={faStar} className="icon" />
                    <FontAwesomeIcon icon={faStar} className="icon" />
                    <FontAwesomeIcon icon={faStar} className="icon" />
                  </div>

                  <div className="price-box">
                    <del>$15.00</del>
                    <p className="price">$12.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
