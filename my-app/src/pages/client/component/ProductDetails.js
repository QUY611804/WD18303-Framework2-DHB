import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetails.css';

const BASE_URL = 'http://localhost:3000'; // Adjust this if needed based on your API

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        setError('Lỗi khi lấy dữ liệu sản phẩm');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
  };

  const addToCart = () => {
    if (product) {
      // Create a new product object with all necessary details
      const productDetails = {
        id: product.id,
        name: product.name,
        price: product.price,
        description: product.description,
        image: product.image,
        quantity: quantity,
      };

      const cart = JSON.parse(localStorage.getItem('cart')) || [];
      const existingProductIndex = cart.findIndex(item => item.id === product.id);

      if (existingProductIndex !== -1) {
        // If the product already exists in the cart, update the quantity
        cart[existingProductIndex].quantity += quantity;
      } else {
        // Otherwise, add the new product to the cart
        cart.push(productDetails);
      }

      // Update the cart in localStorage
      localStorage.setItem('cart', JSON.stringify(cart));
      alert('Sản phẩm đã được thêm vào giỏ hàng!');
    }
  };

  if (loading) {
    return <div>Đang tải dữ liệu...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Không tìm thấy sản phẩm</div>;
  }

  return (
    <div className="product-details">
      <div className="product-detail-container">
        <img src={`${BASE_URL}/uploads/products/${product.image}`} alt={product.name} className="product-image" />
        <div className="product-info">
          <h1 className="product-name">{product.name}</h1>
          <p className="product-price">{product.price} VNĐ</p>
          <p className="product-description">{product.description}</p>
          <div className="quantity-controls1">
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
    </div>
  );
};

export default ProductDetails;
