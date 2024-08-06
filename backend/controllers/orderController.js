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

