import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from '../component/ImageSlider';
import './Products.css';

const BASE_URL = 'http://localhost:3000'; // Adjust this if needed based on your API

const Products = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [bestSellingProducts, setBestSellingProducts] = useState([]);
  const [discountedProducts, setDiscountedProducts] = useState([]);

  useEffect(() => {
    // Fetch featured products
    fetch(`${BASE_URL}/api/products_noibat`)
      .then(response => response.json())
      .then(data => setFeaturedProducts(data))
      .catch(error => console.error('Error fetching featured products:', error));

    // Fetch best selling products
    fetch(`${BASE_URL}/api/products_banchay`)
      .then(response => response.json())
      .then(data => setBestSellingProducts(data))
      .catch(error => console.error('Error fetching best selling products:', error));

    // Fetch discounted products
    fetch(`${BASE_URL}/api/products_khuyenmai`)
      .then(response => response.json())
      .then(data => setDiscountedProducts(data))
      .catch(error => console.error('Error fetching discounted products:', error));
  }, []);

  return (
    <div className="products">
      <ImageSlider />
      <section className="featured-products">
        <h2>Sản phẩm nổi bật</h2>
        <div className="product-list">
          {featuredProducts.map(product => (
            <div className="product-item" key={product.id}>
              <img src={`${BASE_URL}/uploads/products/${product.image}`} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <div className="product-buttons">
                <Link to={`/product/${product.id}`} className="details-button">Chi tiết</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="best-selling-products">
        <h2>Sản phẩm bán chạy</h2>
        <div className="product-list">
          {bestSellingProducts.map(product => (
            <div className="product-item" key={product.id}>
              <img src={`${BASE_URL}/uploads/products/${product.image}`} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p className="product-price">{product.price}</p>
              <div className="product-buttons">
                <Link to={`/product/${product.id}`} className="details-button">Chi tiết</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="discounted-products">
        <h2>Sản phẩm khuyến mãi</h2>
        <div className="product-list">
          {discountedProducts.map(product => (
            <div className="product-item" key={product.id}>
              <img src={`${BASE_URL}/uploads/products/${product.image}`} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p className="product-price">
                <span className="old-price">{product.price} VNĐ</span>
                <br/>
                {product.sell_price} VNĐ
              </p>
              <div className="product-buttons">
                <Link to={`/product/${product.id}`} className="details-button">Chi tiết</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
