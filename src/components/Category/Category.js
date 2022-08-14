import React from 'react';
import img1 from '../../assets/images/icons/dress.svg';
import img2 from '../../assets/images/icons/coat.svg';
import img3 from '../../assets/images/icons/glasses.svg';
import img4 from '../../assets/images/icons/shorts.svg';
import img5 from '../../assets/images/icons/tee.svg';
import img6 from '../../assets/images/icons/jacket.svg';
import img7 from '../../assets/images/icons/watch.svg';
import img8 from '../../assets/images/icons/hat.svg';
import './Category.css';

const Category = () => {
  return (
    <div className="category">
      <div className="container">
        <div className="category-item-container has-scrollbar">
          <div className="category-item">
            <div className="category-img-box">
              <img src={img1} alt="dress & frock" width="30" />
            </div>

            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Dress & frock</h3>

                <p className="category-item-amount">(53)</p>
              </div>

              <button className="category-btn">Show all</button>
            </div>
          </div>

          <div className="category-item">
            <div className="category-img-box">
              <img src={img2} alt="winter wear" width="30" />
            </div>

            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Winter wear</h3>

                <p className="category-item-amount">(58)</p>
              </div>

              <button className="category-btn">Show all</button>
            </div>
          </div>

          <div className="category-item">
            <div className="category-img-box">
              <img src={img3} alt="glasses & lens" width="30" />
            </div>

            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Glasses & lens</h3>

                <p className="category-item-amount">(68)</p>
              </div>

              <button className="category-btn">Show all</button>
            </div>
          </div>

          <div className="category-item">
            <div className="category-img-box">
              <img src={img4} alt="shorts & jeans" width="30" />
            </div>

            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Shorts & jeans</h3>

                <p className="category-item-amount">(84)</p>
              </div>

              <button className="category-btn">Show all</button>
            </div>
          </div>

          <div className="category-item">
            <div className="category-img-box">
              <img src={img5} alt="t-shirts" width="30" />
            </div>

            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">T-shirts</h3>

                <p className="category-item-amount">(35)</p>
              </div>

              <button className="category-btn">Show all</button>
            </div>
          </div>

          <div className="category-item">
            <div className="category-img-box">
              <img src={img6} alt="jacket" width="30" />
            </div>

            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Jacket</h3>

                <p className="category-item-amount">(16)</p>
              </div>

              <button className="category-btn">Show all</button>
            </div>
          </div>

          <div className="category-item">
            <div className="category-img-box">
              <img src={img7} alt="watch" width="30" />
            </div>

            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Watch</h3>

                <p className="category-item-amount">(27)</p>
              </div>

              <button className="category-btn">Show all</button>
            </div>
          </div>

          <div className="category-item">
            <div className="category-img-box">
              <img src={img8} alt="hat & caps" width="30" />
            </div>

            <div className="category-content-box">
              <div className="category-content-flex">
                <h3 className="category-item-title">Hat & caps</h3>

                <p className="category-item-amount">(39)</p>
              </div>
              <button className="category-btn">Show all</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
