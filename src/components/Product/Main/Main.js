/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Minimal from './Minimal/Minimal';
import Featured from './Featured/Featured';
import Grid from './Grid/Grid';
import './Main.css';

const Main = () => {
  return (
    <div class="product-box">
      <Minimal />
      <Featured />
      <Grid />
    </div>
  );
};

export default Main;
