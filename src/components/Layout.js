import React from 'react';
import Modal from './Modal/Modal';
import Notif from './Notif/Notif';
import Header from './Header/Header';
import Banner from './Banner/Banner';
import Category from './Category/Category';
import Product from './Product/Product';
import Info from './Info/Info';
import Blogs from './Blogs/Blogs';
import Footer from './Footer/Footer';

const Layout = () => {
  return (
    <div>
      <Modal />
      <Notif />
      <Header />
      <Banner />
      <Category />
      <Product />
      <Info />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Layout;
