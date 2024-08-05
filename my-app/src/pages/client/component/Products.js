import React from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from '../component/ImageSlider';
import './Products.css';

const featuredProducts = [
  { id: 1, name: 'Sản phẩm 1', imgSrc: '/assets/noibat1.jpg', price: '200.000 VNĐ' },
  { id: 2, name: 'Sản phẩm 2', imgSrc: '/assets/noibat2.jpg', price: '300.000 VNĐ' },
  { id: 3, name: 'Sản phẩm 3', imgSrc: '/assets/noibat3.jpg', price: '150.000 VNĐ' },
  { id: 4, name: 'Sản phẩm 4', imgSrc: '/assets/noibat3.jpg', price: '150.000 VNĐ' },
];

const bestSellingProducts = [
  { id: 1, name: 'Sản phẩm A', imgSrc: '/assets/banchay1.jpg', price: '250.000 VNĐ' },
  { id: 2, name: 'Sản phẩm B', imgSrc: '/assets/banchay2.jpg', price: '350.000 VNĐ' },
  { id: 3, name: 'Sản phẩm C', imgSrc: '/assets/banchay3.jpg', price: '180.000 VNĐ' },
  { id: 4, name: 'Sản phẩm D', imgSrc: '/assets/noibat3.jpg', price: '150.000 VNĐ' },
];

const discountedProducts = [
  { id: 1, name: 'Sản phẩm Khuyến Mãi 1', imgSrc: '/assets/km1.jpg', oldPrice: '250.000VNĐ', newPrice: '200.000 VNĐ' },
  { id: 2, name: 'Sản phẩm Khuyến Mãi 2', imgSrc: '/assets/km1.jpg', oldPrice: '300.000VNĐ', newPrice: '250.000 VNĐ' },
  { id: 3, name: 'Sản phẩm Khuyến Mãi 3', imgSrc: '/assets/km2.jpg', oldPrice: '200.000VNĐ', newPrice: '150.000 VNĐ' },
  { id: 4, name: 'Sản phẩm Khuyến Mãi 4', imgSrc: '/assets/noibat3.jpg', oldPrice: '150.000 VNĐ' , newPrice: '150.000 VNĐ'},
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

        <section className="discounted-products">
          <h2>Sản phẩm khuyến mãi</h2>
          <div className="product-list">
            {discountedProducts.map(product => (
              <div className="product-item" key={product.id}>
                <img src={product.imgSrc} alt={product.name} className="product-image" />
                <h3>{product.name}</h3>
                <p className="product-price">
                  <span className="old-price">{product.oldPrice}</span>
                  <br/> 
                   {product.newPrice}
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
