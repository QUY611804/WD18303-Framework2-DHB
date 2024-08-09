import React, { useState, useEffect } from "react";
import axios from "axios";
import "./OrderDetail.css";
import { useParams, useNavigate } from "react-router-dom";

const BASE_URL = "http://localhost:3000"; // Đảm bảo BASE_URL đúng với cấu hình API của bạn

const OrderDetail = () => {
    const { id } = useParams(); // Lấy id từ URL
    const navigate = useNavigate(); // Hook để điều hướng trang
    const [orders, setOrders] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchOrders = async () => {
            const username = localStorage.getItem("username");

            if (username) {
                try {
                    const response = await axios.get(
                        `${BASE_URL}/api/orderByName1/${id}`
                    );
                    setOrders(response.data);
                } catch (err) {
                    console.error("Lỗi khi lấy đơn hàng:", err);
                    setError("Có lỗi xảy ra khi lấy dữ liệu đơn hàng.");
                } finally {
                    setLoading(false);
                }
            } else {
                setError("Thiếu thông tin tên người dùng.");
                setLoading(false);
            }
        };

        fetchOrders();
    }, [id]);

    const handleCancelOrder = async (orderId) => {
        const username = localStorage.getItem("username");

        if (username) {
            // Hiện hộp thoại xác nhận
            const isConfirmed = window.confirm("Bạn có chắc chắn muốn hủy đơn hàng này không?");

            if (isConfirmed) {
                try {
                    // Gửi yêu cầu hủy đơn hàng
                    const response = await axios.delete(`${BASE_URL}/api/orders/${orderId}`, {
                        data: { username } // Nếu cần gửi tên người dùng để xác thực
                    });

                    if (response.status === 200) {
                        // Hiển thị thông báo hủy thành công
                        alert("Hủy đơn hàng thành công!");

                        // Cập nhật danh sách đơn hàng
                        setOrders((prevOrders) =>
                            prevOrders.filter((order) => order.order_id !== orderId)
                        );

                        // Chuyển hướng về trang đơn hàng
                        navigate("/orderhistory");
                    } else {
                        setError("Có lỗi xảy ra khi hủy đơn hàng.");
                    }
                } catch (err) {
                    console.error("Lỗi khi hủy đơn hàng:", err);
                    setError("Có lỗi xảy ra khi hủy đơn hàng.");
                }
            }
        } else {
            setError("Thiếu thông tin tên người dùng.");
        }
    };

    if (loading) {
        return <p>Đang tải dữ liệu...</p>;
    }

    if (error) {
        return <p className="error-message">{error}</p>;
    }

    if (orders.length === 0) {
        return <p>Không có đơn hàng nào.</p>;
    }

    return (
        <div className="order-history">
            <h1>Chi tiết đơn hàng</h1>
            <table className="order-table">
                <thead>
                    <tr>
                        <th>ID Đơn hàng</th>
                        <th>Ngày</th>
                        <th>Tổng tiền</th>
                        <th>Trạng thái</th>
                        <th>Tên sản phẩm</th>
                        <th>Hình ảnh sản phẩm</th>
                        <th>Hành động</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.order_id}>
                            <td>{order.order_id}</td>
                            <td>{new Date(order.date).toLocaleDateString()}</td>
                            <td>{order.total} VNĐ</td>
                            <td>{order.status}</td>
                            <td>{order.name}</td>
                            <td>
                                {order.image ? (
                                    <img
                                        src={`${BASE_URL}/${order.image}`}
                                        alt={order.name}
                                        className="product-image1"
                                    />
                                ) : (
                                    "Không có hình ảnh"
                                )}
                            </td>
                            <td>
                                <button
                                    className="action-button cancel-button"
                                    onClick={() => handleCancelOrder(order.order_id)}
                                >
                                    Hủy
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrderDetail;
