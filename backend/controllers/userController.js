const connection = require('../config/database');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



// Example function to get all users
exports.getAllUsers = (req, res) => {
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(results);
  });
};



//login


exports.login = (req, res) => {
  const { username, password } = req.body;

  connection.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Lỗi kết nối cơ sở dữ liệu' });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Tên đăng nhập không tồn tại' });
    }

    const user = results[0];

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ message: 'Lỗi xác thực mật khẩu' });
      }

      if (!isMatch) {
        return res.status(401).json({ message: 'Mật khẩu không đúng' });
      }

      const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });

      res.status(200).json({ token });
    });
  });
};



exports.register = (req, res) => {
  const { username, email, password } = req.body;

  // Kiểm tra xem tên đăng nhập đã tồn tại chưa
  connection.query('SELECT * FROM users WHERE username = ?', [username], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Lỗi kết nối cơ sở dữ liệu' });
    }

    if (results.length > 0) {
      return res.status(400).json({ message: 'Tên đăng nhập đã tồn tại' });
    }

    // Kiểm tra xem email đã tồn tại chưa
    connection.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Lỗi kết nối cơ sở dữ liệu' });
      }

      if (results.length > 0) {
        return res.status(400).json({ message: 'Email đã tồn tại' });
      }

      // Mã hóa mật khẩu và lưu người dùng vào cơ sở dữ liệu
      bcrypt.hash(password, 10, (err, hashedPassword) => {
        if (err) {
          return res.status(500).json({ message: 'Lỗi mã hóa mật khẩu' });
        }

        connection.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [username, email, hashedPassword], (err, results) => {
          if (err) {
            return res.status(500).json({ message: 'Lỗi khi lưu người dùng vào cơ sở dữ liệu' });
          }

          res.status(200).json({ message: 'Đăng ký thành công!' });
        });
      });
    });
  });
};