// Đầu tiên, hãy tạo một Auth Context để quản lý trạng thái xác thực.
import React, { createContext, useState, useContext } from 'react';
//' createContext()' tạo một đối tượng ngữ cảnh mới có tên là 'AuthContext'. Đối tượng này sẽ giữ trạng thái xác thực và cung cấp các phương thức để thay đổi trạng thái đó.
const AuthContext = createContext();

// Thành phần này 'AuthProvider' là thành phần bao bọc sẽ cung cấp ngữ cảnh xác thực cho các thành phần con của nó.
// `useState(false)` khởi tạo một biến trạng thái được đặt tên `isAuthenticated` với giá trị mặc định là `false`. Trạng thái này sẽ theo dõi xem người dùng đã được xác thực hay chưa.
// `setIsAuthenticated` là một chức năng cho phép cập nhật `isAuthenticated` trạng thái.
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

//   `login` là một hàm thiết lập ``isAuthenticated``trạng thái thành `true`, biểu thị người dùng đã được xác thực.
// `logout` là một hàm thiết lập `isAuthenticated`trạng thái thành `false`, biểu thị người dùng chưa được xác thực.
  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);


// Thành `AuthProvider` phần trả về thành `AuthContext.Provider`phần.
// Thành `AuthContext.Provider`phần sử dụng valueprop để truyền `isAuthenticated`trạng thái và logincác `logout`hàm cho bất kỳ thành phần nào sử dụng ngữ cảnh này.
// `{children}`đảm bảo rằng bất kỳ thành phần con nào của `AuthProvider`sẽ được hiển thị trong `AuthContext.Provider`.
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
// `useAuth`là một hook tùy chỉnh bao bọc `useContext`hook, cho phép các thành phần truy cập vào ngữ cảnh xác thực dễ dàng hơn.
//` useContext(AuthContext)`trả về giá trị ngữ cảnh hiện tại cho `AuthContext`, bao gồm `isAuthenticated`, `login`, và `logout`.
export const useAuth = () => useContext(AuthContext);