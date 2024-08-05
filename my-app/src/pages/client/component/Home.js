import React from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from '../component/ImageSlider';
import './Home.css';

const featuredProducts = [
  { id: 1, name: 'Sản phẩm 1', imgSrc: '/assets/noibat1.jpg', price: '200.000 VNĐ' },
  { id: 2, name: 'Sản phẩm 2', imgSrc: '/assets/noibat2.jpg', price: '300.000 VNĐ' },
  { id: 3, name: 'Sản phẩm 3', imgSrc: '/assets/noibat3.jpg', price: '150.000 VNĐ' },
];

const bestSellingProducts = [
  { id: 1, name: 'Sản phẩm A', imgSrc: '/assets/banchay1.jpg', price: '250.000 VNĐ' },
  { id: 2, name: 'Sản phẩm B', imgSrc: '/assets/banchay2.jpg', price: '350.000 VNĐ' },
  { id: 3, name: 'Sản phẩm C', imgSrc: '/assets/banchay3.jpg', price: '180.000 VNĐ' },
];

const Home = () => {
    return (
      <div className="home">
        <ImageSlider />
        <section className="featured-products">
          <h2>Sản phẩm nổi bật</h2>
          <div className="product-list">
            {featuredProducts.map(product => (
              <div className="product-item" key={product.id}>
                <img src={product.imgSrc} alt={product.name} className="product-image" />
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
                <img src={product.imgSrc} alt={product.name} className="product-image" />
                <h3>{product.name}</h3>
                <p className="product-price">{product.price}</p>
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

export default Home;
