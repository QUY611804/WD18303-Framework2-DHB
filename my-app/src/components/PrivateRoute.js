// Tạo một thành phần kiểm tra xem người dùng đã được xác thực hay chưa trước khi hiển thị các tuyến quản trị.
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ element, allowedRoles }) => {
  const { isAuthenticated, userRole } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/login" />;
  }

  return element;
};

export default PrivateRoute;
