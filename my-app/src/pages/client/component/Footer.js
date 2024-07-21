import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <Link to="/">Trang Chủ</Link>
        <Link to="/products">Sản phẩm</Link>
        <Link to="/about">Giới thiệu</Link>
        <Link to="/contact">Liên hệ</Link>
      </div>
      <div className="footer-copy">
        &copy; {new Date().getFullYear()} DHB & FPoly. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
