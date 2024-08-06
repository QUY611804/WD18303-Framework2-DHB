const connection = require("../config/database");

exports.getAllProducts = (req, res) => {
  connection.query("SELECT * FROM products", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(results);
  });
};
//sanpham noi bat
exports.featuredProducts = (req, res) => {
  connection.query(
    `SELECT *
  FROM products
  WHERE status = 'nổi bật'
  ORDER BY created_at DESC
  LIMIT 4;
;`,
    (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(200).json(results);
    }
  );
};

//sanpham bán chạy
exports.bestSellProducts = (req, res) => {
  connection.query(
    `SELECT *
  FROM products
  WHERE status = 'bán chạy'
  ORDER BY created_at DESC
  LIMIT 4;
;`,
    (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(200).json(results);
    }
  );
};
//sản phẩm khuyến mãi
exports.sellProducts = (req, res) => {
  connection.query(
    `SELECT *
  FROM products
  WHERE status = 'khuyến mãi'
  ORDER BY created_at DESC
  LIMIT 4;
;`,
    (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(200).json(results);
    }
  );
};

exports.GetOneProduct = (req, res) => {
  // Lấy giá trị ID từ URL params
  const productId = req.params.id;
  // Thực hiện truy vấn SQL với giá trị ID
  connection.query(
   `SELECT 
    *,
    (price - sell_price) AS price_difference
FROM 
    products
WHERE 
    id = ?;`,
    [productId],  // Truyền giá trị ID vào câu lệnh SQL
    (err, results) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      if (results.length === 0) {
        return res.status(404).json({ message: 'Sản phẩm không tồn tại' });
      }
      res.status(200).json(results[0]); // Trả về sản phẩm đầu tiên
    }
  );
};
