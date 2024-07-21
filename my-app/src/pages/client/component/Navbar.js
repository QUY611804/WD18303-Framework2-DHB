import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../../src/assets/logoo.png'; // Đường dẫn mới

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Logo" className="logo-image" />
      </Link>
      <div className="navbar-links">
        <Link to="/">Trang Chủ</Link>
        <Link to="/products">Sản phẩm</Link>
        <Link to="/about">Giới thiệu</Link>
        <Link to="/contact">Liên hệ</Link>
      </div>
      <div className="navbar-auth">
        <Link to="/signin">Đăng nhập</Link>
        <Link to="/signup">Đăng ký</Link>
      </div>
    </nav>
  );
};

export default Navbar;
