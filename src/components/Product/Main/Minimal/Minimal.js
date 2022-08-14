/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import clothes1 from '../../../../assets/images/products/clothes-1.jpg';
import clothes2 from '../../../../assets/images/products/clothes-2.jpg';
import clothes3 from '../../../../assets/images/products/clothes-3.jpg';
import shirt1 from '../../../../assets/images/products/shirt-1.jpg';
import jacket5 from '../../../../assets/images/products/jacket-5.jpg';
import jacket1 from '../../../../assets/images/products/jacket-1.jpg';
import jacket3 from '../../../../assets/images/products/jacket-3.jpg';
import shorts1 from '../../../../assets/images/products/shorts-1.jpg';
import sports1 from '../../../../assets/images/products/sports-1.jpg';
import sports2 from '../../../../assets/images/products/sports-2.jpg';
import sports3 from '../../../../assets/images/products/sports-3.jpg';
import sports6 from '../../../../assets/images/products/sports-6.jpg';
import party1 from '../../../../assets/images/products/party-wear-1.jpg';
import shoe1 from '../../../../assets/images/products/shoe-1.jpg';
import shoe2 from '../../../../assets/images/products/shoe-2.jpg';
import shoe3 from '../../../../assets/images/products/shoe-3.jpg';
import watch1 from '../../../../assets/images/products/watch-1.jpg';
import watch3 from '../../../../assets/images/products/watch-3.jpg';
import jewellery1 from '../../../../assets/images/products/jewellery-1.jpg';
import jewellery2 from '../../../../assets/images/products/jewellery-2.jpg';
import jewellery3 from '../../../../assets/images/products/jewellery-3.jpg';
import perfume from '../../../../assets/images/products/perfume.jpg';
import belt from '../../../../assets/images/products/belt.jpg';
import shampoo from '../../../../assets/images/products/shampoo.jpg';
import './Minimal.css';

const Minimal = () => {
  return (
    <div className="product-minimal">
      <div className="product-showcase">
        <h2 className="title">New Arrivals</h2>

        <div className="showcase-wrapper has-scrollbar">
          <div className="showcase-container">
            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src={clothes1}
                  alt="relaxed short full sleeve t-shirt"
                  width="70"
                  className="showcase-img"
                />
              </a>

              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">
                    Relaxed Short full Sleeve T-Shirt
                  </h4>
                </a>

                <a href="#" className="showcase-category">
                  Clothes
                </a>

                <div className="price-box">
                  <p className="price">$45.00</p>
                  <del>$12.00</del>
                </div>
              </div>
            </div>

            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src={clothes2}
                  alt="girls pink embro design top"
                  className="showcase-img"
                  width="70"
                />
              </a>

              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">Girls pnk Embro design Top</h4>
                </a>

                <a href="#" className="showcase-category">
                  Clothes
                </a>

                <div className="price-box">
                  <p className="price">$61.00</p>
                  <del>$9.00</del>
                </div>
              </div>
            </div>

            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src={clothes3}
                  alt="black floral wrap midi skirt"
                  className="showcase-img"
                  width="70"
                />
              </a>

              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">
                    Black Floral Wrap Midi Skirt
                  </h4>
                </a>

                <a href="#" className="showcase-category">
                  Clothes
                </a>

                <div className="price-box">
                  <p className="price">$76.00</p>
                  <del>$25.00</del>
                </div>
              </div>
            </div>

            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src={shirt1}
                  alt="pure garment dyed cotton shirt"
                  className="showcase-img"
                  width="70"
                />
              </a>

              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">
                    Pure Garment Dyed Cotton Shirt
                  </h4>
                </a>

                <a href="#" className="showcase-category">
                  Mens Fashion
                </a>

                <div className="price-box">
                  <p className="price">$68.00</p>
                  <del>$31.00</del>
                </div>
              </div>
            </div>
          </div>

          <div className="showcase-container">
            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src={jacket5}
                  alt="men yarn fleece full-zip jacket"
                  className="showcase-img"
                  width="70"
                />
              </a>

              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">
                    MEN Yarn Fleece Full-Zip Jacket
                  </h4>
                </a>

                <a href="#" className="showcase-category">
                  Winter wear
                </a>

                <div className="price-box">
                  <p className="price">$61.00</p>
                  <del>$11.00</del>
                </div>
              </div>
            </div>

            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src={jacket1}
                  alt="mens winter leathers jackets"
                  className="showcase-img"
                  width="70"
                />
              </a>

              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">
                    Mens Winter Leathers Jackets
                  </h4>
                </a>

                <a href="#" className="showcase-category">
                  Winter wear
                </a>

                <div className="price-box">
                  <p className="price">$32.00</p>
                  <del>$20.00</del>
                </div>
              </div>
            </div>

            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src={jacket3}
                  alt="mens winter leathers jackets"
                  className="showcase-img"
                  width="70"
                />
              </a>

              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">
                    Mens Winter Leathers Jackets
                  </h4>
                </a>

                <a href="#" className="showcase-category">
                  Jackets
                </a>

                <div className="price-box">
                  <p className="price">$50.00</p>
                  <del>$25.00</del>
                </div>
              </div>
            </div>

            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src={shorts1}
                  alt="better basics french terry sweatshorts"
                  className="showcase-img"
                  width="70"
                />
              </a>

              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">
                    Better Basics French Terry Sweatshorts
                  </h4>
                </a>

                <a href="#" className="showcase-category">
                  Shorts
                </a>

                <div className="price-box">
                  <p className="price">$20.00</p>
                  <del>$10.00</del>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-showcase">
        <h2 className="title">Trending</h2>

        <div className="showcase-wrapper  has-scrollbar">
          <div className="showcase-container">
            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src={sports1}
                  alt="running & trekking shoes - white"
                  className="showcase-img"
                  width="70"
                />
              </a>

              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">
                    Running & Trekking Shoes - White
                  </h4>
                </a>

                <a href="#" className="showcase-category">
                  Sports
                </a>

                <div className="price-box">
                  <p className="price">$49.00</p>
                  <del>$15.00</del>
                </div>
              </div>
            </div>

            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src={sports2}
                  alt="trekking & running shoes - black"
                  className="showcase-img"
                  width="70"
                />
              </a>

              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">
                    Trekking & Running Shoes - black
                  </h4>
                </a>

                <a href="#" className="showcase-category">
                  Sports
                </a>

                <div className="price-box">
                  <p className="price">$78.00</p>
                  <del>$36.00</del>
                </div>
              </div>
            </div>

            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src={party1}
                  alt="womens party wear shoes"
                  className="showcase-img"
                  width="70"
                />
              </a>

              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">Womens Party Wear Shoes</h4>
                </a>

                <a href="#" className="showcase-category">
                  Party wear
                </a>

                <div className="price-box">
                  <p className="price">$94.00</p>
                  <del>$42.00</del>
                </div>
              </div>
            </div>

            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src={sports3}
                  alt="sports claw women's shoes"
                  className="showcase-img"
                  width="70"
                />
              </a>

              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">Sports Claw Women's Shoes</h4>
                </a>

                <a href="#" className="showcase-category">
                  Sports
                </a>

                <div className="price-box">
                  <p className="price">$54.00</p>
                  <del>$65.00</del>
                </div>
              </div>
            </div>
          </div>

          <div className="showcase-container">
            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src={sports6}
                  alt="air tekking shoes - white"
                  className="showcase-img"
                  width="70"
                />
              </a>

              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">Air Trekking Shoes - white</h4>
                </a>

                <a href="#" className="showcase-category">
                  Sports
                </a>

                <div className="price-box">
                  <p className="price">$52.00</p>
                  <del>$55.00</del>
                </div>
              </div>
            </div>

            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src={shoe3}
                  alt="Boot With Suede Detail"
                  className="showcase-img"
                  width="70"
                />
              </a>

              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">Boot With Suede Detail</h4>
                </a>

                <a href="#" className="showcase-category">
                  boots
                </a>

                <div className="price-box">
                  <p className="price">$20.00</p>
                  <del>$30.00</del>
                </div>
              </div>
            </div>

            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src={shoe1}
                  alt="men's leather formal wear shoes"
                  className="showcase-img"
                  width="70"
                />
              </a>

              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">
                    Men's Leather Formal Wear shoes
                  </h4>
                </a>

                <a href="#" className="showcase-category">
                  formal
                </a>

                <div className="price-box">
                  <p className="price">$56.00</p>
                  <del>$78.00</del>
                </div>
              </div>
            </div>

            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src={shoe2}
                  alt="casual men's brown shoes"
                  className="showcase-img"
                  width="70"
                />
              </a>

              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">Casual Men's Brown shoes</h4>
                </a>

                <a href="#" className="showcase-category">
                  Casual
                </a>

                <div className="price-box">
                  <p className="price">$50.00</p>
                  <del>$55.00</del>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product-showcase">
        <h2 className="title">Top Rated</h2>

        <div className="showcase-wrapper  has-scrollbar">
          <div className="showcase-container">
            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src={watch3}
                  alt="pocket watch leather pouch"
                  className="showcase-img"
                  width="70"
                />
              </a>

              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">Pocket Watch Leather Pouch</h4>
                </a>

                <a href="#" className="showcase-category">
                  Watches
                </a>

                <div className="price-box">
                  <p className="price">$50.00</p>
                  <del>$34.00</del>
                </div>
              </div>
            </div>

            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src={jewellery3}
                  alt="silver deer heart necklace"
                  className="showcase-img"
                  width="70"
                />
              </a>

              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">Silver Deer Heart Necklace</h4>
                </a>

                <a href="#" className="showcase-category">
                  Jewellery
                </a>

                <div className="price-box">
                  <p className="price">$84.00</p>
                  <del>$30.00</del>
                </div>
              </div>
            </div>

            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src={perfume}
                  alt="titan 100 ml womens perfume"
                  className="showcase-img"
                  width="70"
                />
              </a>

              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">
                    Titan 100 Ml Womens Perfume
                  </h4>
                </a>

                <a href="#" className="showcase-category">
                  Perfume
                </a>

                <div className="price-box">
                  <p className="price">$42.00</p>
                  <del>$10.00</del>
                </div>
              </div>
            </div>

            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src={belt}
                  alt="men's leather reversible belt"
                  className="showcase-img"
                  width="70"
                />
              </a>

              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">
                    Men's Leather Reversible Belt
                  </h4>
                </a>

                <a href="#" className="showcase-category">
                  Belt
                </a>

                <div className="price-box">
                  <p className="price">$24.00</p>
                  <del>$10.00</del>
                </div>
              </div>
            </div>
          </div>

          <div className="showcase-container">
            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src={jewellery2}
                  alt="platinum zircon classNameic ring"
                  className="showcase-img"
                  width="70"
                />
              </a>

              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">
                    platinum Zircon classNameic Ring
                  </h4>
                </a>

                <a href="#" className="showcase-category">
                  jewellery
                </a>

                <div className="price-box">
                  <p className="price">$62.00</p>
                  <del>$65.00</del>
                </div>
              </div>
            </div>

            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src={watch1}
                  alt="smart watche vital plus"
                  className="showcase-img"
                  width="70"
                />
              </a>

              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">Smart watche Vital Plus</h4>
                </a>

                <a href="#" className="showcase-category">
                  Watches
                </a>

                <div className="price-box">
                  <p className="price">$56.00</p>
                  <del>$78.00</del>
                </div>
              </div>
            </div>

            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src={shampoo}
                  alt="shampoo conditioner packs"
                  className="showcase-img"
                  width="70"
                />
              </a>

              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">shampoo conditioner packs</h4>
                </a>

                <a href="#" className="showcase-category">
                  cosmetics
                </a>

                <div className="price-box">
                  <p className="price">$20.00</p>
                  <del>$30.00</del>
                </div>
              </div>
            </div>

            <div className="showcase">
              <a href="#" className="showcase-img-box">
                <img
                  src={jewellery1}
                  alt="rose gold peacock earrings"
                  className="showcase-img"
                  width="70"
                />
              </a>

              <div className="showcase-content">
                <a href="#">
                  <h4 className="showcase-title">Rose Gold Peacock Earrings</h4>
                </a>

                <a href="#" className="showcase-category">
                  jewellery
                </a>

                <div className="price-box">
                  <p className="price">$20.00</p>
                  <del>$30.00</del>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Minimal;
