import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

const products = [
  { id: 1, name: 'Sản phẩm 1', imgSrc: '/assets/noibat1.jpg', price: '200.000 VNĐ', description: 'Mô tả chi tiết sản phẩm 1' },
  { id: 2, name: 'Sản phẩm 2', imgSrc: '/assets/noibat2.jpg', price: '300.000 VNĐ', description: 'Mô tả chi tiết sản phẩm 2' },
  { id: 3, name: 'Sản phẩm 3', imgSrc: '/assets/noibat3.jpg', price: '150.000 VNĐ', description: 'Mô tả chi tiết sản phẩm 3' },
  { id: 4, name: 'Sản phẩm A', imgSrc: '/assets/banchay1.jpg', price: '250.000 VNĐ', description: 'Mô tả chi tiết sản phẩm A' },
  { id: 5, name: 'Sản phẩm B', imgSrc: '/assets/banchay2.jpg', price: '350.000 VNĐ', description: 'Mô tả chi tiết sản phẩm B' },
  { id: 6, name: 'Sản phẩm C', imgSrc: '/assets/banchay3.jpg', price: '180.000 VNĐ', description: 'Mô tả chi tiết sản phẩm C' },
];

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div>Sản phẩm không tồn tại</div>;
  }

  return (
    <div className="product-details">
      <img src={product.imgSrc} alt={product.name} className="product-image" />
      <h1>{product.name}</h1>
      <p className="product-price">{product.price}</p>
      <p className="product-description">{product.description}</p>
      <button className="buy-button">Mua hàng</button>
    </div>
  );
};

export default ProductDetails;
