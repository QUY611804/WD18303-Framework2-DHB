// Tạo một thành phần kiểm tra xem người dùng đã được xác thực hay chưa trước khi hiển thị các tuyến quản trị.
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

// `PrivateRoute`là một thành phần chức năng sử dụng một `prop` có tên là `element`, biểu diễn thành phần sẽ được hiển thị nếu người dùng được xác thực.
// `useAuth`được sử dụng để lấy trạng thái xác thực hiện tại `( isAuthenticated)` từ `AuthContext`.
const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();

//   Dòng này là toán tử ba ngôi (có điều kiện).
// Nếu `isAuthenticated`là true, nó sẽ trả về `elementprop`, hiển thị thành phần được bảo vệ.
// Nếu `isAuthenticated`là false, nó sẽ trả về thành `Navigate`phần chuyển hướng người dùng đến `/login`tuyến đường.
  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
