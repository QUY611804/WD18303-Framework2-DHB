import React, { useState, useEffect } from 'react';
import './Cart.css';
import CheckoutForm from './CheckoutForm'; // Import component CheckoutForm

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [showCheckoutForm, setShowCheckoutForm] = useState(false);
  const username = localStorage.getItem('username'); // Use 'username' instead of 'userId'

  useEffect(() => {
    // Lấy giỏ hàng từ localStorage
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
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

  const getTotal = () => {
    return cart.reduce((total, item) => {
      // Ensure price is treated as a number
      const price = typeof item.price_difference === 'string' ? parseFloat(item.price_difference.replace(/[^0-9.-]+/g, '')) : parseFloat(item.price_difference);
      return total + (item.quantity * (price || 0));
    }, 0);
  };

  const handleCheckout = () => {
    if (!username) { // Check if username exists
      alert('Vui lòng đăng nhập trước khi thanh toán.');
      return;
    }
    setShowCheckoutForm(true);
  };

  if (cart.length === 0) {
    return <div>Giỏ hàng của bạn đang trống!</div>;
  }

  return (
    <div className="cart">
      <h1>Giỏ hàng</h1>
      <ul>
        {cart.map(item => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-info">
              <h2>{item.name}</h2>
              <p className="cart-item-price">Giá: {item.price_difference}</p>
              <div className="quantity-controls">
                <h4>Số lượng:</h4>
                <button onClick={() => decreaseQuantity(item.id)} className="quantity-button">-</button>
                <span className="quantity">{item.quantity}</span>
                <button onClick={() => increaseQuantity(item.id)} className="quantity-button">+</button>
              </div>
              <button className="remove-button" onClick={() => removeFromCart(item.id)}>Xóa</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <h3>Tổng cộng: {getTotal()} VNĐ</h3>
        <button className="checkout-button" onClick={handleCheckout}>Thanh toán</button>
      </div>
      {showCheckoutForm && <CheckoutForm username={username} />} {/* Pass username */}
    </div>
  );
};

export default Cart;
