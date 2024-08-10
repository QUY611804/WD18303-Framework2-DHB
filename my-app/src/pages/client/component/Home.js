import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ImageSlider from '../component/ImageSlider';
import './Home.css';

const BASE_URL = 'http://localhost:3000'; // Adjust this if needed based on your API

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [bestSellingProducts, setBestSellingProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const [featuredResponse, bestSellingResponse] = await Promise.all([
          axios.get(`${BASE_URL}/api/products_noibat`),
          axios.get(`${BASE_URL}/api/products_banchay`)
        ]);
        setFeaturedProducts(featuredResponse.data);
        setBestSellingProducts(bestSellingResponse.data);
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu từ API', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  if (loading) {
    return <div className="loading">Đang tải...</div>;
  }

  return (
    <div className="home">
      <ImageSlider />
      <section className="featured-products">
        <h2>Sản phẩm nổi bật</h2>
        <div className="product-list">
          {featuredProducts.length > 0 ? (
            featuredProducts.map(product => (
              <div className="product-item" key={product.id}>
                <img src={`${BASE_URL}/uploads/products/${product.image}`} alt={product.name} className="product-image" />
                <h3>{product.name}</h3>
                <p className="product-price">{formatPrice(product.price)}</p>
                <div className="product-buttons">
                  <Link to={`/product/${product.id}`} className="details-button">Chi tiết</Link>
                </div>
              </div>
            ))
          ) : (
            <p>Không có sản phẩm nổi bật</p>
          )}
        </div>
      </section>

      <section className="best-selling-products">
        <h2>Sản phẩm bán chạy</h2>
        <div className="product-list">
          {bestSellingProducts.length > 0 ? (
            bestSellingProducts.map(product => (
              <div className="product-item" key={product.id}>
                <img src={`${BASE_URL}/uploads/products/${product.image}`} alt={product.name} className="product-image" />
                <h3>{product.name}</h3>
                <p className="product-price">{formatPrice(product.price)}</p>
                <div className="product-buttons">
                  <Link to={`/product/${product.id}`} className="details-button">Chi tiết</Link>
                </div>
              </div>
            ))
          ) : (
            <p>Không có sản phẩm bán chạy</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
