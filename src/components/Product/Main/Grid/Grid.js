/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faCartPlus } from '@fortawesome/fontawesome-free-solid';
import {
  faHeart,
  faEye,
  faArrowAltCircleDown,
  faStar as star,
} from '@fortawesome/fontawesome-free-regular';
import clothes3 from '../../../../assets/images/products/clothes-3.jpg';
import clothes4 from '../../../../assets/images/products/clothes-4.jpg';
import shirt1 from '../../../../assets/images/products/shirt-1.jpg';
import shirt2 from '../../../../assets/images/products/shirt-2.jpg';
import jacket1 from '../../../../assets/images/products/jacket-1.jpg';
import jacket2 from '../../../../assets/images/products/jacket-2.jpg';
import jacket3 from '../../../../assets/images/products/jacket-3.jpg';
import jacket4 from '../../../../assets/images/products/jacket-4.jpg';
import jacket5 from '../../../../assets/images/products/jacket-5.jpg';
import jacket6 from '../../../../assets/images/products/jacket-6.jpg';
import shorts1 from '../../../../assets/images/products/shorts-1.jpg';
import shorts2 from '../../../../assets/images/products/shorts-2.jpg';
import sports1 from '../../../../assets/images/products/sports-1.jpg';
import sports4 from '../../../../assets/images/products/sports-4.jpg';
import party1 from '../../../../assets/images/products/party-wear-1.jpg';
import party2 from '../../../../assets/images/products/party-wear-2.jpg';
import shoe1 from '../../../../assets/images/products/shoe-1.jpg';
import shoe11 from '../../../../assets/images/products/shoe-1_1.jpg';
import shoe2 from '../../../../assets/images/products/shoe-2.jpg';
import shoe21 from '../../../../assets/images/products/shoe-2_1.jpg';
import watch1 from '../../../../assets/images/products/watch-1.jpg';
import watch2 from '../../../../assets/images/products/watch-2.jpg';
import watch3 from '../../../../assets/images/products/watch-3.jpg';
import watch4 from '../../../../assets/images/products/watch-4.jpg';

import './Grid.css';

const Grid = () => {
  return (
    <div className="product-main">
      <h2 className="title">New Products</h2>

      <div className="product-grid">
        <div className="showcase">
          <div className="showcase-banner">
            <img
              src={jacket3}
              alt="Mens Winter Leathers Jackets"
              width="300"
              className="product-img default"
            />
            <img
              src={jacket4}
              alt="Mens Winter Leathers Jackets"
              width="300"
              className="product-img hover"
            />

            <p className="showcase-badge">15%</p>

            <div className="showcase-actions">
              <button className="btn-action">
                <FontAwesomeIcon icon={faHeart} className="icon" />
              </button>

              <button className="btn-action">
                <FontAwesomeIcon icon={faEye} className="icon" />
              </button>

              <button className="btn-action">
                <FontAwesomeIcon icon={faArrowAltCircleDown} className="icon" />
              </button>

              <button className="btn-action">
                <FontAwesomeIcon icon={faCartPlus} className="icon" />
              </button>
            </div>
          </div>

          <div className="showcase-content">
            <a href="#" className="showcase-category">
              jacket
            </a>

            <a href="#">
              <h3 className="showcase-title">Mens Winter Leathers Jackets</h3>
            </a>

            <div className="showcase-rating">
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={star} className="icon" />
              <FontAwesomeIcon icon={star} className="icon" />
            </div>

            <div className="price-box">
              <p className="price">$48.00</p>
              <del>$75.00</del>
            </div>
          </div>
        </div>

        <div className="showcase">
          <div className="showcase-banner">
            <img
              src={shirt1}
              alt="Pure Garment Dyed Cotton Shirt"
              className="product-img default"
              width="300"
            />
            <img
              src={shirt2}
              alt="Pure Garment Dyed Cotton Shirt"
              className="product-img hover"
              width="300"
            />

            <p className="showcase-badge angle black">sale</p>

            <div className="showcase-actions">
              <button className="btn-action">
                <FontAwesomeIcon icon={faHeart} className="icon" />
              </button>

              <button className="btn-action">
                <FontAwesomeIcon icon={faEye} className="icon" />
              </button>

              <button className="btn-action">
                <FontAwesomeIcon icon={faArrowAltCircleDown} className="icon" />
              </button>

              <button className="btn-action">
                <FontAwesomeIcon icon={faCartPlus} className="icon" />
              </button>
            </div>
          </div>

          <div className="showcase-content">
            <a href="#" className="showcase-category">
              shirt
            </a>

            <h3>
              <a href="#" className="showcase-title">
                Pure Garment Dyed Cotton Shirt
              </a>
            </h3>

            <div className="showcase-rating">
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={star} className="icon" />
              <FontAwesomeIcon icon={star} className="icon" />
            </div>

            <div className="price-box">
              <p className="price">$45.00</p>
              <del>$56.00</del>
            </div>
          </div>
        </div>

        <div className="showcase">
          <div className="showcase-banner">
            <img
              src={jacket5}
              alt="MEN Yarn Fleece Full-Zip Jacket"
              className="product-img default"
              width="300"
            />
            <img
              src={jacket6}
              alt="MEN Yarn Fleece Full-Zip Jacket"
              className="product-img hover"
              width="300"
            />

            <div className="showcase-actions">
              <button className="btn-action">
                <FontAwesomeIcon icon={faHeart} className="icon" />
              </button>

              <button className="btn-action">
                <FontAwesomeIcon icon={faEye} className="icon" />
              </button>

              <button className="btn-action">
                <FontAwesomeIcon icon={faArrowAltCircleDown} className="icon" />
              </button>

              <button className="btn-action">
                <FontAwesomeIcon icon={faCartPlus} className="icon" />
              </button>
            </div>
          </div>

          <div className="showcase-content">
            <a href="#" className="showcase-category">
              Jacket
            </a>

            <h3>
              <a href="#" className="showcase-title">
                MEN Yarn Fleece Full-Zip Jacket
              </a>
            </h3>

            <div className="showcase-rating">
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={star} className="icon" />
              <FontAwesomeIcon icon={star} className="icon" />
            </div>

            <div className="price-box">
              <p className="price">$58.00</p>
              <del>$65.00</del>
            </div>
          </div>
        </div>

        <div className="showcase">
          <div className="showcase-banner">
            <img
              src={clothes3}
              alt="Black Floral Wrap Midi Skirt"
              className="product-img default"
              width="300"
            />
            <img
              src={clothes4}
              alt="Black Floral Wrap Midi Skirt"
              className="product-img hover"
              width="300"
            />

            <p className="showcase-badge angle pink">new</p>

            <div className="showcase-actions">
              <button className="btn-action">
                <FontAwesomeIcon icon={faHeart} className="icon" />
              </button>

              <button className="btn-action">
                <FontAwesomeIcon icon={faEye} className="icon" />
              </button>

              <button className="btn-action">
                <FontAwesomeIcon icon={faArrowAltCircleDown} className="icon" />
              </button>

              <button className="btn-action">
                <FontAwesomeIcon icon={faCartPlus} className="icon" />
              </button>
            </div>
          </div>

          <div className="showcase-content">
            <a href="#" className="showcase-category">
              skirt
            </a>

            <h3>
              <a href="#" className="showcase-title">
                Black Floral Wrap Midi Skirt
              </a>
            </h3>

            <div className="showcase-rating">
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={star} className="icon" />
              <FontAwesomeIcon icon={star} className="icon" />
            </div>

            <div className="price-box">
              <p className="price">$25.00</p>
              <del>$35.00</del>
            </div>
          </div>
        </div>

        <div className="showcase">
          <div className="showcase-banner">
            <img
              src={shoe2}
              alt="Casual Men's Brown shoes"
              className="product-img default"
              width="300"
            />
            <img
              src={shoe21}
              alt="Casual Men's Brown shoes"
              className="product-img hover"
              width="300"
            />

            <div className="showcase-actions">
              <button className="btn-action">
                <FontAwesomeIcon icon={faHeart} className="icon" />
              </button>

              <button className="btn-action">
                <FontAwesomeIcon icon={faEye} className="icon" />
              </button>

              <button className="btn-action">
                <FontAwesomeIcon icon={faArrowAltCircleDown} className="icon" />
              </button>

              <button className="btn-action">
                <FontAwesomeIcon icon={faCartPlus} className="icon" />
              </button>
            </div>
          </div>

          <div className="showcase-content">
            <a href="#" className="showcase-category">
              casual
            </a>

            <h3>
              <a href="#" className="showcase-title">
                Casual Men's Brown shoes
              </a>
            </h3>

            <div className="showcase-rating">
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={star} className="icon" />
              <FontAwesomeIcon icon={star} className="icon" />
            </div>

            <div className="price-box">
              <p className="price">$99.00</p>
              <del>$105.00</del>
            </div>
          </div>
        </div>

        <div className="showcase">
          <div className="showcase-banner">
            <img
              src={watch3}
              alt="Pocket Watch Leather Pouch"
              className="product-img default"
              width="300"
            />
            <img
              src={watch4}
              alt="Pocket Watch Leather Pouch"
              className="product-img hover"
              width="300"
            />

            <p className="showcase-badge angle black">sale</p>

            <div className="showcase-actions">
              <button className="btn-action">
                <FontAwesomeIcon icon={faHeart} className="icon" />
              </button>

              <button className="btn-action">
                <FontAwesomeIcon icon={faEye} className="icon" />
              </button>

              <button className="btn-action">
                <FontAwesomeIcon icon={faArrowAltCircleDown} className="icon" />
              </button>

              <button className="btn-action">
                <FontAwesomeIcon icon={faCartPlus} className="icon" />
              </button>
            </div>
          </div>

          <div className="showcase-content">
            <a href="#" className="showcase-category">
              watches
            </a>

            <h3>
              <a href="#" className="showcase-title">
                Pocket Watch Leather Pouch
              </a>
            </h3>

            <div className="showcase-rating">
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={star} className="icon" />
              <FontAwesomeIcon icon={star} className="icon" />
            </div>

            <div className="price-box">
              <p className="price">$150.00</p>
              <del>$170.00</del>
            </div>
          </div>
        </div>

        <div className="showcase">
          <div className="showcase-banner">
            <img
              src={watch1}
              alt="Smart watche Vital Plus"
              className="product-img default"
              width="300"
            />
            <img
              src={watch2}
              alt="Smart watche Vital Plus"
              className="product-img hover"
              width="300"
            />

            <div className="showcase-actions">
              <button className="btn-action">
                <FontAwesomeIcon icon={faHeart} className="icon" />
              </button>

              <button className="btn-action">
                <FontAwesomeIcon icon={faEye} className="icon" />
              </button>

              <button className="btn-action">
                <FontAwesomeIcon icon={faArrowAltCircleDown} className="icon" />
              </button>

              <button className="btn-action">
                <FontAwesomeIcon icon={faCartPlus} className="icon" />
              </button>
            </div>
          </div>

          <div className="showcase-content">
            <a href="#" className="showcase-category">
              watches
            </a>

            <h3>
              <a href="#" className="showcase-title">
                Smart watche Vital Plus
              </a>
            </h3>

            <div className="showcase-rating">
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={star} className="icon" />
              <FontAwesomeIcon icon={star} className="icon" />
            </div>

            <div className="price-box">
              <p className="price">$100.00</p>
              <del>$120.00</del>
            </div>
          </div>
        </div>

        <div className="showcase">
          <div className="showcase-banner">
            <img
              src={party1}
              alt="Womens Party Wear Shoes"
              className="product-img default"
              width="300"
            />
            <img
              src={party2}
              alt="Womens Party Wear Shoes"
              className="product-img hover"
              width="300"
            />

            <p className="showcase-badge angle black">sale</p>

            <div className="showcase-actions">
              <button className="btn-action">
                <FontAwesomeIcon icon={faHeart} className="icon" />
              </button>

              <button className="btn-action">
                <FontAwesomeIcon icon={faEye} className="icon" />
              </button>

              <button className="btn-action">
                <FontAwesomeIcon icon={faArrowAltCircleDown} className="icon" />
              </button>

              <button className="btn-action">
                <FontAwesomeIcon icon={faCartPlus} className="icon" />
              </button>
            </div>
          </div>

          <div className="showcase-content">
            <a href="#" className="showcase-category">
              party wear
            </a>

            <h3>
              <a href="#" className="showcase-title">
                Womens Party Wear Shoes
              </a>
            </h3>

            <div className="showcase-rating">
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={star} className="icon" />
              <FontAwesomeIcon icon={star} className="icon" />
            </div>

            <div className="price-box">
              <p className="price">$25.00</p>
              <del>$30.00</del>
            </div>
          </div>
        </div>

        <div className="showcase">
          <div className="showcase-banner">
            <img
              src={jacket1}
              alt="Mens Winter Leathers Jackets"
              className="product-img default"
              width="300"
            />
            <img
              src={jacket2}
              alt="Mens Winter Leathers Jackets"
              className="product-img hover"
              width="300"
            />

            <div className="showcase-actions">
              <button className="btn-action">
                <FontAwesomeIcon icon={faHeart} className="icon" />
              </button>

              <button className="btn-action">
                <FontAwesomeIcon icon={faEye} className="icon" />
              </button>

              <button className="btn-action">
                <FontAwesomeIcon icon={faArrowAltCircleDown} className="icon" />
              </button>

              <button className="btn-action">
                <FontAwesomeIcon icon={faCartPlus} className="icon" />
              </button>
            </div>
          </div>

          <div className="showcase-content">
            <a href="#" className="showcase-category">
              jacket
            </a>

            <h3>
              <a href="#" className="showcase-title">
                Mens Winter Leathers Jackets
              </a>
            </h3>

            <div className="showcase-rating">
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={star} className="icon" />
              <FontAwesomeIcon icon={star} className="icon" />
            </div>

            <div className="price-box">
              <p className="price">$32.00</p>
              <del>$45.00</del>
            </div>
          </div>
        </div>

        <div className="showcase">
          <div className="showcase-banner">
            <img
              src={sports1}
              alt="Trekking & Running Shoes - black"
              className="product-img default"
              width="300"
            />
            <img
              src={sports4}
              alt="Trekking & Running Shoes - black"
              className="product-img hover"
              width="300"
            />

            <p className="showcase-badge angle black">sale</p>

            <div className="showcase-actions">
              <button className="btn-action">
                <FontAwesomeIcon icon={faHeart} className="icon" />
              </button>

              <button className="btn-action">
                <FontAwesomeIcon icon={faEye} className="icon" />
              </button>

              <button className="btn-action">
                <FontAwesomeIcon icon={faArrowAltCircleDown} className="icon" />
              </button>

              <button className="btn-action">
                <FontAwesomeIcon icon={faCartPlus} className="icon" />
              </button>
            </div>
          </div>

          <div className="showcase-content">
            <a href="#" className="showcase-category">
              sports
            </a>

            <h3>
              <a href="#" className="showcase-title">
                Trekking & Running Shoes - black
              </a>
            </h3>

            <div className="showcase-rating">
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={star} className="icon" />
              <FontAwesomeIcon icon={star} className="icon" />
            </div>

            <div className="price-box">
              <p className="price">$58.00</p>
              <del>$64.00</del>
            </div>
          </div>
        </div>

        <div className="showcase">
          <div className="showcase-banner">
            <img
              src={shoe1}
              alt="Men's Leather Formal Wear shoes"
              className="product-img default"
              width="300"
            />
            <img
              src={shoe11}
              alt="Men's Leather Formal Wear shoes"
              className="product-img hover"
              width="300"
            />

            <div className="showcase-actions">
              <button className="btn-action">
                <FontAwesomeIcon icon={faHeart} className="icon" />
              </button>

              <button className="btn-action">
                <FontAwesomeIcon icon={faEye} className="icon" />
              </button>

              <button className="btn-action">
                <FontAwesomeIcon icon={faArrowAltCircleDown} className="icon" />
              </button>

              <button className="btn-action">
                <FontAwesomeIcon icon={faCartPlus} className="icon" />
              </button>
            </div>
          </div>

          <div className="showcase-content">
            <a href="#" className="showcase-category">
              formal
            </a>

            <h3>
              <a href="#" className="showcase-title">
                Men's Leather Formal Wear shoes
              </a>
            </h3>

            <div className="showcase-rating">
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={star} className="icon" />
              <FontAwesomeIcon icon={star} className="icon" />
            </div>

            <div className="price-box">
              <p className="price">$50.00</p>
              <del>$65.00</del>
            </div>
          </div>
        </div>

        <div className="showcase">
          <div className="showcase-banner">
            <img
              src={shorts1}
              alt="Better Basics French Terry Sweatshorts"
              className="product-img default"
              width="300"
            />
            <img
              src={shorts2}
              alt="Better Basics French Terry Sweatshorts"
              className="product-img hover"
              width="300"
            />

            <p className="showcase-badge angle black">sale</p>

            <div className="showcase-actions">
              <button className="btn-action">
                <FontAwesomeIcon icon={faHeart} className="icon" />
              </button>

              <button className="btn-action">
                <FontAwesomeIcon icon={faEye} className="icon" />
              </button>

              <button className="btn-action">
                <FontAwesomeIcon icon={faArrowAltCircleDown} className="icon" />
              </button>

              <button className="btn-action">
                <FontAwesomeIcon icon={faCartPlus} className="icon" />
              </button>
            </div>
          </div>

          <div className="showcase-content">
            <a href="#" className="showcase-category">
              shorts
            </a>

            <h3>
              <a href="#" className="showcase-title">
                Better Basics French Terry Sweatshorts
              </a>
            </h3>

            <div className="showcase-rating">
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={star} className="icon" />
              <FontAwesomeIcon icon={star} className="icon" />
            </div>

            <div className="price-box">
              <p className="price">$78.00</p>
              <del>$85.00</del>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grid;
