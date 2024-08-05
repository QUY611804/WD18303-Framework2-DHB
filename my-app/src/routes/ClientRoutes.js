import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/client/component/Home';
import Products from '../pages/client/component/Products';
import About from '../pages/client/component/About';
import Contact from '../pages/client/component/Contact';
import SignIn from '../pages/client/component/SignIn';
import SignUp from '../pages/client/component/SignUp';
import Footer from '../pages/client/component/Footer';
import Navbar from '../pages/client/component/Navbar';
import ProductDetails from '../pages/client/component/ProductDetails';
import Cart from '../pages/client/component/Cart';

const ClientRoutes = () => {
  return (
    <>
       <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  );
};

export default ClientRoutes;
