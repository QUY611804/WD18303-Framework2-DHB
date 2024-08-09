import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from "../../../../src/assets/logoo.png"; // Đường dẫn mới

const Navbar = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');
  const isLoggedIn = !!username; // Kiểm tra xem người dùng có đăng nhập hay không

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/signin'); // Chuyển hướng đến trang đăng nhập
  };

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
        {isLoggedIn && (
          <Link to="/orderhistory">Lịch sử Đơn hàng</Link> // Hiển thị nếu người dùng đã đăng nhập
        )}
      </div>
      <div className="navbar-auth">
        <Link to="/cart" className="cart-link">
          <i className="fas fa-shopping-cart"></i> Giỏ hàng
        </Link>
        {isLoggedIn ? (
          <>
            <span className="navbar-username">{username}</span>
            <button className="logout-button" onClick={handleLogout}>Đăng xuất</button>
          </>
        ) : (
          <Link to="/signin">Đăng nhập</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
