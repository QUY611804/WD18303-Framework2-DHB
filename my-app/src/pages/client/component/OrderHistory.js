import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Thêm import Link để điều hướng
import "./OrderHistory.css";

const BASE_URL = "http://localhost:3000"; // Đảm bảo BASE_URL đúng với cấu hình API của bạn

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Thêm trạng thái loading

  useEffect(() => {
    const fetchOrders = async () => {
      const username = localStorage.getItem("username");
      const token = localStorage.getItem("token");

      if (username && token) {
        try {
          const response = await axios.get(
            `${BASE_URL}/api/ordersByName/${username}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          setOrders(response.data);
        } catch (err) {
          console.error("Lỗi khi lấy đơn hàng:", err);
          setError("Có lỗi xảy ra khi lấy dữ liệu đơn hàng.");
        } finally {
          setLoading(false); // Đặt trạng thái loading thành false khi dữ liệu đã được lấy
        }
      } else {
        setError("Chưa đăng nhập.");
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0
    }).format(amount);
  };

  if (loading) {
    return <p>Đang tải dữ liệu...</p>; // Hiển thị thông báo tải dữ liệu
  }

  return (
    <div className="order-history">
      <h1>Lịch sử Đơn hàng</h1>
      {error && <p className="error-message">{error}</p>}
      {orders.length > 0 ? (
        <table className="order-table">
          <thead>
            <tr>
              <th>ID Đơn hàng</th>
              <th>Hình ảnh sản phẩm</th>
              <th>Tổng tiền</th>
              <th>Chi tiết</th> {/* Cập nhật tiêu đề cột */}
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <td>{order.order_id}</td>
                <td>
                  {order.image ? (
                    <img
                      src={`${BASE_URL}/uploads/products/${order.image}`}
                      alt={order.name}
                      className="product-image1"
                    />
                  ) : (
                    "Không có hình ảnh"
                  )}
                </td>
                <td>{formatCurrency(order.total)}</td> {/* Sử dụng hàm formatCurrency */}
                <td>
                  <Link to={`/orders/${order.order_id}`} className="action-button detail-button">
                    Xem chi tiết
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !error && <p>Không có đơn hàng nào.</p>
      )}
    </div>
  );
};

export default OrderHistory;
