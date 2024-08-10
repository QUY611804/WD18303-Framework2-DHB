const connection = require('../config/database');

// Example function to get all categoris
exports.getAllOrder_detail = (req, res) => {
  connection.query('SELECT * FROM order_detail', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(results);
  });
};
exports.orderByName = (req, res) => {
  const { name } = req.params; // Lấy giá trị từ tham số URL

  connection.query(
    `SELECT 
    o.*,        
    od.*,       
    p.*         
FROM orders o
JOIN order_detail od ON o.id = od.order_id
JOIN products p ON od.product_id = p.id
WHERE o.name = ?
;
`, // Sử dụng dấu hỏi để bảo mật SQL Injection
    [name], // Thay thế dấu hỏi bằng giá trị của name
    (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(200).json(results);
    }
  );
};

//
exports.getOrderDetailById = (req, res) => {
  const orderId = parseInt(req.params.id, 10); // Phân tích ID đơn hàng từ tham số URL

  // Thực hiện truy vấn SQL
  connection.query(
    `SELECT 
        orders.id, 
        orders.name AS order_name,
        products.name AS product_name,
        products.image, 
        products.price, 
        products.sell_price, 
        order_detail.quantity, 
        order_detail.statuss, 
        order_detail.total 
     FROM 
        order_detail 
     INNER JOIN 
        orders ON order_detail.order_id = orders.id 
     INNER JOIN 
        products ON order_detail.product_id = products.id 
     WHERE 
        order_detail.order_id = ?`,  // Sử dụng dấu chấm hỏi để bảo vệ chống lại SQL Injection
    [orderId],  // Thay thế dấu chấm hỏi bằng ID đơn hàng
    (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });  // Trả về lỗi với trạng thái 500 nếu có vấn đề
      }
      res.status(200).json(results);  // Trả về kết quả truy vấn dưới dạng JSON
    }
  );
};



const { validationResult } = require('express-validator'); // Optional: để xác thực yêu cầu

// Update order status
exports.updateOrderDetailStatus = (req, res) => {
    const { id } = req.params; // ID đơn hàng từ URL
    const { status } = req.body; // Trạng thái mới từ nội dung yêu cầu

    // Xác thực đầu vào (tùy chọn)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Truy vấn SQL để cập nhật trạng thái của đơn hàng
    const query = `UPDATE order_detail SET statuss = ? WHERE order_id = ?`;

    // Execute the query
    connection.query(query, [status, id], (err, results) => {
        if (err) {
            console.error("Error updating order status:", err);
            return res.status(500).json({ error: err.message });
        }

        if (results.affectedRows === 0) {
            return res.status(404).json({ message: "Order not found" });
        }

        res.status(200).json({ message: "Order status updated successfully" });
    });
};
