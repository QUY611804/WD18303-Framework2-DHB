import React, { useState, useEffect } from 'react';
import './Cart.css';
import CheckoutForm from './CheckoutForm';

const BASE_URL = 'http://localhost:3000'; // Cập nhật đúng URL của server

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const username = localStorage.getItem('username');

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
    setLoading(false);
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(product => product.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const increaseQuantity = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cart.map(item =>
      item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  const getTotal = () => {
    return cart.reduce((total, item) => {
      const price = typeof item.price === 'string' ? parseFloat(item.price.replace(/[^0-9.-]+/g, '')) : parseFloat(item.price);
      return total + (item.quantity * (price || 0));
    }, 0);
  };

  const handleCheckout = () => {
    if (!username) {
      alert('Vui lòng đăng nhập trước khi thanh toán.');
      return;
    }
    setShowCheckoutForm(true);
  };

  if (loading) {
    return <div>Đang tải giỏ hàng...</div>;
  }

  if (cart.length === 0) {
    return <div className="empty-cart">Giỏ hàng của bạn đang trống!</div>;
  }

  return (
    <div className="cart">
      <h1>Giỏ hàng</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id} className="cart-item">
            <img src={`${BASE_URL}/uploads/products/${item.image}`} alt={item.name} className="cart-item-image" />
            <div className="cart-item-info">
              <h2>{item.name}</h2>
              <p className="cart-item-price">Giá: {formatPrice(item.price)}</p>
              <div className="quantity-controls">
                <h4>Số lượng:</h4>
                <button onClick={() => decreaseQuantity(item.id)} className="quantity-button">-</button>
                <span className="quantity">{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)} className="quantity-button">+</button>
              </div>
              <button className="remove-button" onClick={() => removeFromCart(item.id)}>Xóa</button>
              <hr/>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <h3>Tổng cộng: {formatPrice(getTotal())}</h3>
        <button className="checkout-button" onClick={handleCheckout}>Thanh toán</button>
      </div>
      {showCheckoutForm && <CheckoutForm username={username} />}
    </div>
  );
};

export default Cart;
