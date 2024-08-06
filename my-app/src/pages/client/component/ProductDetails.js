import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:3000/api/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product details:', error));
  }, [id]);

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
  };

  const addToCart = () => {
    if (product) {
      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const existingProductIndex = cart.findIndex(item => item.id === product.id);
      if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += quantity;
      } else {
        cart.push({ ...product, quantity });
      }
      localStorage.setItem('cart', JSON.stringify(cart));//lưu vào localStorage
      alert('Sản phẩm đã được thêm vào giỏ hàng!');
    }
  };

  if (!product) {
    return <div>Đang tải dữ liệu...</div>;
  }

  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <h1 className="product-name">{product.name}</h1>
        <p className="product-price">{product.price_difference}</p>
        <p className="product-description">{product.description}</p>
        <div className="quantity-controls">
          <h4>Số lượng:</h4>
          <div className="quantity-wrapper">
            <button onClick={decreaseQuantity} className="quantity-button">-</button>
            <span className="quantity">{quantity}</span>
            <button onClick={increaseQuantity} className="quantity-button">+</button>
          </div>
        </div>
        <button className="buy-button" onClick={addToCart}>Mua hàng</button>
      </div>
    </div>
  );
};

export default ProductDetails;
