const connection = require('../config/database');

// Định nghĩa mô hình User
const User = {
  // Lấy tất cả người dùng
  getAll: (callback) => {
    connection.query('SELECT * FROM userinfo', callback);
  },
  
  // Lấy người dùng theo ID
  getById: (id, callback) => {
    connection.query('SELECT * FROM userinfo WHERE id = ?', [id], callback);
  },
  
  // Tạo người dùng mới
  create: (userData, callback) => {
    connection.query('INSERT INTO userinfo SET ?', userData, callback);
  },
  
  // Cập nhật người dùng
  update: (id, userData, callback) => {
    connection.query('UPDATE userinfo SET ? WHERE id = ?', [userData, id], callback);
  },
  
  // Xóa người dùng
  delete: (id, callback) => {
    connection.query('DELETE FROM userinfo WHERE id = ?', [id], callback);
  }
};

module.exports = User;
