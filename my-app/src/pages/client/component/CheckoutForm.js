import React, { useState } from 'react';
import './CheckoutForm.css';

const CheckoutForm = ({ username }) => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    address: '',
    paymentMethod: 'cod', // Mặc định là 'Cash on Delivery'
  });
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    address: '',
    paymentMethod: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevForm => ({ ...prevForm, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {
      name: '',
      phone: '',
      address: '',
      paymentMethod: '',
    };

    if (!form.name.trim()) {
      newErrors.name = 'Vui lòng nhập họ tên của bạn.';
    }
    if (!form.phone.trim()) {
      newErrors.phone = 'Vui lòng nhập số điện thoại.';
    }
    if (!form.address.trim()) {
      newErrors.address = 'Vui lòng nhập địa chỉ.';
    }
    if (!form.paymentMethod) {
      newErrors.paymentMethod = 'Vui lòng chọn hình thức thanh toán.';
    }

    setErrors(newErrors);

    return !Object.values(newErrors).some(error => error !== '');
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Kiểm tra dữ liệu biểu mẫu
    if (!validateForm()) {
      return;
    }
  
    // Lấy giỏ hàng từ localStorage
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    // Kiểm tra giỏ hàng và xử lý giá trị
    if (cart.length === 0) {
      alert('Giỏ hàng trống. Không thể đặt hàng.');
      return;
    }
  
    const orderItems = cart.map(item => ({
      product_id: item.id,
      quantity: item.quantity,
      price: typeof item.price === 'string'
        ? parseFloat(item.price.replace(/[^0-9.-]+/g, ''))
        : parseFloat(item.price),
      total: (typeof item.price === 'string'
        ? parseFloat(item.price.replace(/[^0-9.-]+/g, ''))
        : parseFloat(item.price)) * item.quantity // Tính giá trị tổng
    }));
  
    // Gửi dữ liệu đơn hàng và giỏ hàng đến máy chủ
    try {
      const response = await fetch('http://localhost:3000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          username,
          order_detail: orderItems,
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Có lỗi xảy ra');
      }
  
      const data = await response.json();
      if (data.message === 'Đặt hàng thành công!') {
        // Xóa giỏ hàng sau khi đặt hàng thành công
        localStorage.removeItem('cart');
        alert('Đặt hàng thành công!');
        // Chuyển hướng đến trang giỏ hàng
        window.location.href = '/cart';
      } else {
        alert('Có lỗi xảy ra. Vui lòng thử lại.');
      }
    } catch (error) {
      console.error('Lỗi khi gửi đơn hàng:', error);
      alert(`Có lỗi xảy ra: ${error.message}`);
    }
  };
  
  
  
  
  
  return (
    <div className="checkout-form">
      <h2>Thông tin người mua hàng</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Họ tên:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="phone">Số điện thoại:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            required
          />
          {errors.phone && <p className="error-message">{errors.phone}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="address">Địa chỉ:</label>
          <textarea
            id="address"
            name="address"
            value={form.address}
            onChange={handleChange}
            required
          />
          {errors.address && <p className="error-message">{errors.address}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="paymentMethod">Hình thức thanh toán:</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={form.paymentMethod}
            onChange={handleChange}
            required
          >
            <option value="cod">Khi nhận hàng</option>
            <option value="bank">Ngân hàng</option>
          </select>
          {errors.paymentMethod && <p className="error-message">{errors.paymentMethod}</p>}
        </div>
        <button type="submit" className="submit-button">Đặt hàng</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
