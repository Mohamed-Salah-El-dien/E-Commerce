/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import img1 from '../../../assets/images/electronics-banner-1.jpg';
import img2 from '../../../assets/images/mens-banner.jpg';
import img3 from '../../../assets/images/womens-banner.jpg';
import img4 from '../../../assets/images/electronics-banner-2.jpg';
import './Desktop.css';

const Desktop = () => {
  return (
    <nav className="desktop-navigation-menu">
      <div className="container">
        <ul className="desktop-menu-category-list">
          <li className="menu-category">
            <a href="#" className="menu-title">
              Home
            </a>
          </li>

          <li className="menu-category">
            <a href="#" className="menu-title">
              Categories
            </a>

            <div className="dropdown-panel">
              <ul className="dropdown-panel-list">
                <li className="menu-title">
                  <a href="#">Electronics</a>
                </li>

                <li className="panel-list-item">
                  <a href="#">Desktop</a>
                </li>

                <li className="panel-list-item">
                  <a href="#">Laptop</a>
                </li>

                <li className="panel-list-item">
                  <a href="#">Camera</a>
                </li>

                <li className="panel-list-item">
                  <a href="#">Tablet</a>
                </li>

                <li className="panel-list-item">
                  <a href="#">Headphone</a>
                </li>

                <li className="panel-list-item">
                  <a href="#">
                    <img
                      src={img1}
                      alt="headphone collection"
                      width="250"
                      height="119"
                    />
                  </a>
                </li>
              </ul>

              <ul className="dropdown-panel-list">
                <li className="menu-title">
                  <a href="#">Men's</a>
                </li>

                <li className="panel-list-item">
                  <a href="#">Formal</a>
                </li>

                <li className="panel-list-item">
                  <a href="#">Casual</a>
                </li>

                <li className="panel-list-item">
                  <a href="#">Sports</a>
                </li>

                <li className="panel-list-item">
                  <a href="#">Jacket</a>
                </li>

                <li className="panel-list-item">
                  <a href="#">Sunglasses</a>
                </li>

                <li className="panel-list-item">
                  <a href="#">
                    <img
                      src={img2}
                      alt="men's fashion"
                      width="250"
                      height="119"
                    />
                  </a>
                </li>
              </ul>

              <ul className="dropdown-panel-list">
                <li className="menu-title">
                  <a href="#">Women's</a>
                </li>

                <li className="panel-list-item">
                  <a href="#">Formal</a>
                </li>

                <li className="panel-list-item">
                  <a href="#">Casual</a>
                </li>

                <li className="panel-list-item">
                  <a href="#">Perfume</a>
                </li>

                <li className="panel-list-item">
                  <a href="#">Cosmetics</a>
                </li>

                <li className="panel-list-item">
                  <a href="#">Bags</a>
                </li>

                <li className="panel-list-item">
                  <a href="#">
                    <img
                      src={img3}
                      alt="women's fashion"
                      width="250"
                      height="119"
                    />
                  </a>
                </li>
              </ul>

              <ul className="dropdown-panel-list">
                <li className="menu-title">
                  <a href="#">Electronics</a>
                </li>

                <li className="panel-list-item">
                  <a href="#">Smart Watch</a>
                </li>

                <li className="panel-list-item">
                  <a href="#">Smart TV</a>
                </li>

                <li className="panel-list-item">
                  <a href="#">Keyboard</a>
                </li>

                <li className="panel-list-item">
                  <a href="#">Mouse</a>
                </li>

                <li className="panel-list-item">
                  <a href="#">Microphone</a>
                </li>

                <li className="panel-list-item">
                  <a href="#">
                    <img
                      src={img4}
                      alt="mouse collection"
                      width="250"
                      height="119"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li className="menu-category">
            <a href="#" className="menu-title">
              Men's
            </a>

            <ul className="dropdown-list">
              <li className="dropdown-item">
                <a href="#">Shirt</a>
              </li>

              <li className="dropdown-item">
                <a href="#">Shorts & Jeans</a>
              </li>

              <li className="dropdown-item">
                <a href="#">Safety Shoes</a>
              </li>

              <li className="dropdown-item">
                <a href="#">Wallet</a>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <a href="#" className="menu-title">
              Women's
            </a>

            <ul className="dropdown-list">
              <li className="dropdown-item">
                <a href="#">Dress & Frock</a>
              </li>

              <li className="dropdown-item">
                <a href="#">Earrings</a>
              </li>

              <li className="dropdown-item">
                <a href="#">Necklace</a>
              </li>

              <li className="dropdown-item">
                <a href="#">Makeup Kit</a>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <a href="#" className="menu-title">
              Jewelry
            </a>

            <ul className="dropdown-list">
              <li className="dropdown-item">
                <a href="#">Earrings</a>
              </li>

              <li className="dropdown-item">
                <a href="#">Couple Rings</a>
              </li>

              <li className="dropdown-item">
                <a href="#">Necklace</a>
              </li>

              <li className="dropdown-item">
                <a href="#">Bracelets</a>
              </li>
            </ul>
          </li>

          <li className="menu-category">
            <a href="#" className="menu-title">
              Perfume
            </a>

            <ul className="dropdown-list">
              <li className="dropdown-item">
                <a href="#">Clothes Perfume</a>
              </li>

              <li className="dropdown-item">
                <a href="#">Deodorant</a>
              </li>

              <li className="dropdown-item">
                <a href="#">Flower Fragrance</a>
              </li>

              <li className="dropdown-item">
                <a href="#">Air Freshener</a>
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
      </div>
    </nav>
  );
};

export default Desktop;
