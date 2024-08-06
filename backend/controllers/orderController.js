const connection = require('../config/database');

// Example function to get all categoris
exports.getAllOrders = (req, res) => {
  connection.query('SELECT * FROM orders', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(results);
  });
};

exports.PostOrders = (req, res) => {
  const { name, phone, address, paymentMethod, order_detail } = req.body;

  if (!name || !phone || !address || !paymentMethod || !order_detail) {
      return res.status(400).json({ error: 'Thiếu thông tin cần thiết' });
  }

  // Bắt đầu giao dịch để đảm bảo toàn vẹn dữ liệu
  connection.beginTransaction(err => {
      if (err) {
          return res.status(500).json({ error: 'Lỗi khi bắt đầu giao dịch' });
      }

      // Thêm đơn hàng vào bảng orders
      const sql = 'INSERT INTO orders (name, phone, address, paymentMethod) VALUES (?, ?, ?, ?)';
      const values = [name, phone, address, paymentMethod];

      connection.query(sql, values, (err, results) => {
          if (err) {
              return connection.rollback(() => {
                  res.status(500).json({ error: 'Lỗi khi thêm đơn hàng' });
              });
          }

          const orderId = results.insertId;
          const orderDetailSql = 'INSERT INTO order_detail (order_id, product_id, quantity, price, total) VALUES ?';
          const orderDetailValues = order_detail.map(item => [
              orderId,
              item.product_id,
              item.quantity,
              item.price,
              item.price * item.quantity // Tính giá trị tổng
          ]);

          connection.query(orderDetailSql, [orderDetailValues], (err) => {
              if (err) {
                  return connection.rollback(() => {
                      res.status(500).json({ error: 'Lỗi khi thêm item vào đơn hàng' });
                  });
              }

              // Cam kết giao dịch
              connection.commit(err => {
                  if (err) {
                      return connection.rollback(() => {
                          res.status(500).json({ error: 'Lỗi khi cam kết giao dịch' });
                      });
                  }
                  res.status(200).json({ message: 'Đặt hàng thành công!' });
              });
          });
      });
  });
};

exports.getOrderById = (req, res) => {
  const orderId = req.params.id; //Sử dụng cách đặt tên camelCase nhất quán

  // Query the database to get user by ID
  connection.query(
    "SELECT * FROM orders WHERE id = ?", // SQL query
    [orderId], // Truy vấn tham số hóa để ngăn chặn SQL injection
    (err, results) => {
      if (err) {
        // Ghi lại lỗi và phản hồi bằng mã trạng thái 500
        console.error("Database query error:", err);
        return res
          .status(500)
          .json({ error: "An error occurred while fetching the user." });
      }

      if (results.length === 0) {
        // Nếu không tìm thấy người dùng, hãy trả lời bằng mã trạng thái 404
        return res.status(404).json({ message: "User not found" });
      }

      // Respond with the user data
      res.status(200).json(results[0]);
    }
  );
};
