// src/contexts/AuthContext.js
import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * createContext(): Điều này tạo ra một đối tượng Context có tên là AuthContext.
 *  Đối tượng Context sẽ được sử dụng để truyền trạng thái xác thực và các hàm thông qua cây thành phần mà không cần phải truyền props một cách rõ ràng ở mọi cấp độ. */
const AuthContext = createContext();

const users = [
  {   email: "admin@gmail.com",username: 'admin', password: '123456', role: 'admin' },
  {   email: "user@gmail.com",username: 'user', password: '123456', role: 'user' }
];


/**
 * AuthProvider: Một thành phần cung cấp ngữ cảnh xác thực cho các thành phần con của nó. Nó được sử dụng useStateđể quản lý hai phần trạng thái:
 * isAuthenticated: Giá trị boolean cho biết người dùng đã đăng nhập hay chưa.
 * userRole: Vai trò của người dùng đã đăng nhập ( adminhoặc user).

 */
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();



  /**
   * login: Chức năng xác thực người dùng.
      * Nó kiểm tra xem tên người dùng và mật khẩu được cung cấp có khớp với bất kỳ người dùng nào trong usersmảng hay không.
      * Nếu tìm thấy sự trùng khớp, nó sẽ thiết lập vai isAuthenticatedtrò của người dùng trùng khớp.trueuserRole
      * Sau đó, nó sử dụng navigatechức năng (từ react-router-dom) để chuyển hướng người dùng đến trang phù hợp dựa trên vai trò của họ ( /adminđối với người dùng quản trị và /clientngười dùng thông thường).
      * Nếu không tìm thấy kết quả trùng khớp, hệ thống sẽ hiển thị cảnh báo cho biết thông tin đăng nhập không hợp lệ.
  */
  const login = (email, password) => {
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      setIsAuthenticated(true);
      setUserRole(user.role);
      navigate(user.role === 'admin' ? '/admin' : '/client');
    } else {
      alert('Tài khoản người dùng không thể đăng nhập vào đây! ');
    }
  };


/**
 * logout: Chức năng đăng xuất người dùng.
 * Nó đặt isAuthenticated thành falsevà userRole thành null.
 * Sau đó, nó sử dụng navigate chức năng này để chuyển hướng người dùng đến trang đăng nhập.
 */
  const logout = () => {
    setIsAuthenticated(false);
    setUserRole(null);
    navigate('/login');
  };


  /**
   * AuthContext.Provider: Thành phần này cung cấp ngữ cảnh xác thực cho các thành phần con của nó.
*  valueProp chứa trạng thái và các hàm ( isAuthenticated, userRole, login, logout) có thể truy cập được bởi bất kỳ thành phần nào sử dụng ngữ cảnh này.
   */
  return (
    <AuthContext.Provider value={{ isAuthenticated, userRole, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
