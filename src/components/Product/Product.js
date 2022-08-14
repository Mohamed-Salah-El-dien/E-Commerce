/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Sidebar from './Sidebar/Sidebar';
import Main from './Main/Main';
import './Product.css';

const Product = () => {
  return (
    <div>
      <div class="product-container">
        <div class="container">
          <Sidebar />
          <Main />
        </div>
      </div>
    </div>
  );
};

export default Product;
