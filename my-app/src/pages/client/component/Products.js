import React from 'react';
import ImageSlider from '../component/ImageSlider';
import './Products.css';

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

const promotionalProducts = [
  { id: 1, name: 'Khuyến mãi X', imgSrc: '/assets/km1.jpg', price: '100.000 VNĐ', discount: '50%' },
  { id: 2, name: 'Khuyến mãi Y', imgSrc: '/assets/km2.jpg', price: '150.000 VNĐ', discount: '30%' },
  { id: 3, name: 'Khuyến mãi Z', imgSrc: '/assets/noibat1.jpg', price: '200.000 VNĐ', discount: '20%' },
];

const Products = () => {
  return (
    <div className="products">
      <ImageSlider />

      <section className="featured-products">
        <h2>Sản phẩm nổi bật</h2>
        <div className="product-list">
          {featuredProducts.map(product => (
            <div className="product-item" key={product.id}>
              <img src={product.imgSrc} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p className="product-price">{product.price}</p>
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
            </div>
          ))}
        </div>
      </section>

      <section className="promotional-products">
        <h2>Sản phẩm khuyến mãi</h2>
        <div className="product-list">
          {promotionalProducts.map(product => (
            <div className="product-item" key={product.id}>
              <img src={product.imgSrc} alt={product.name} className="product-image" />
              <h3>{product.name}</h3>
              <p className="product-price">
                {product.price} <span className="discount">-{product.discount}</span>
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
