// src/contexts/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userAccounts } from "./userAccounts";

const AuthContext = createContext(); //`AuthContext`:Bối cảnh này sẽ cung cấp dữ liệu và chức năng liên quan đến xác thực trong toàn bộ ứng dụng.

// `useAuth`: Một hook tùy chỉnh giúp đơn giản hóa việc truy cập các giá trị ngữ cảnh xác thực.
export const useAuth = () => {
  return useContext(AuthContext);
};

/**
   
    * `AuthProvider`: Một thành phần React cung cấp các giá trị ngữ cảnh xác thực cho các thành phần con của nó.
    * `user`: Biến trạng thái để lưu trữ người dùng đã xác thực hiện tại.
    * `navigate`: Chức năng lập trình để điều hướng đến các tuyến đường khác nhau.
    * `useEffect`: Khi gắn thành phần, nó sẽ kiểm tra xem có đối tượng người dùng nào được lưu trữ trong bộ nhớ cục bộ hay không và thiết lập trạng thái cho phù hợp.
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  /**
   
   * `login`: Một chức năng để xử lý việc đăng nhập của người dùng.
   * `account`: Tìm tài khoản người dùng khớp với email và mật khẩu được cung cấp.
   * Nếu tìm thấy tài khoản :
        `setUser(account)`: Cập nhật `user` trạng thái.
        `localStorage.setItem('user', JSON.stringify(account))`: Lưu dữ liệu người dùng vào bộ nhớ cục bộ.
        `navigate('/admin')`: Chuyển hướng đến trang quản trị nếu người dùng là quản trị viên.
        `navigate('/*')`: Chuyển hướng đến khu vực khách hàng để thực hiện các vai trò khác.
   * Nếu không tìm thấy tài khoản : Hiển thị cảnh báo về thông tin đăng nhập không hợp lệ.

   */
  const login = (email, password) => {
    const account = userAccounts.find(
      (user) => user.email === email && user.password === password
    );

    if (account) {
      setUser(account);
      localStorage.setItem("user", JSON.stringify(account));
      if (account.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/client");
      }
    } else {
      alert("email và mật khẩu không chính xác");
    }
  };


  /**
   * `logout`: Một chức năng để xử lý việc đăng xuất của người dùng.
   * `setUser(null)`: Xóa `user` trạng thái.
   * `localStorage.removeItem('user'):` Xóa dữ liệu người dùng khỏi bộ nhớ cục bộ.
   * `navigate('/login')`: Chuyển hướng đến trang đăng nhập.
   */
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };


  /**
   * `AuthContext`.Provider: Cung cấp các giá trị user, login, và logoutcho các thành phần con của nó.
   * {children}: Hiển thị các thành phần được bao bọc bởi `AuthProvider`.
   *  */
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
