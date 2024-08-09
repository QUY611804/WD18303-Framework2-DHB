import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import ProductsRoutes from "../pages/admin/products/router";
import UserRoutes from "../pages/admin/user/router";
import OrdersRoutes from "../pages/admin/orders/router";
import CategoryRoutes from "../pages/admin/categories/router";

const AdminRoutes = () => {
  // Lấy thông tin từ localStorage
  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  // Nếu không có token hoặc vai trò không phải admin, chuyển đến trang đăng nhập
  if (!token || role !== 'admin') {
    return <Navigate to="/login" />;
  }

  return (
    <Routes>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="category/*" element={<CategoryRoutes />} />
      <Route path="products/*" element={<ProductsRoutes />} />
      <Route path="user/*" element={<UserRoutes />} />
      <Route path="orders/*" element={<OrdersRoutes />} />
      <Route path="/" element={<Navigate to="dashboard" />} /> {/* Điều hướng về dashboard */}
    </Routes>
  );
};

export default AdminRoutes;
