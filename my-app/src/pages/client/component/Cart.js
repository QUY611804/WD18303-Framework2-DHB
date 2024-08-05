// src/pages/client/component/Cart.js
import React from "react";
import "./Cart.css";

const Cart = () => {
  const cartItems = [
    { id: 1, name: "Sản phẩm 1", price: "200.000 VNĐ", quantity: 1 },
    { id: 2, name: "Sản phẩm 2", price: "300.000 VNĐ", quantity: 2 },
  ];

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.quantity * parseInt(item.price.replace(/\D/g, '')), 0);
  };

  return (
    <div className="cart">
      <h1>Giỏ hàng của bạn</h1>
      <div className="cart-items">
        {cartItems.map(item => (
          <div className="cart-item" key={item.id}>
            <h3>{item.name}</h3>
            <p>Giá: {item.price}</p>
            <p>Số lượng: {item.quantity}</p>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Tổng cộng: {getTotal()} VNĐ</h3>
      </div>
    </div>
  );
};

export default Cart;
