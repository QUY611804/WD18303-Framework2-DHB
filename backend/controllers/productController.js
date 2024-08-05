const connection = require('../config/database');

// Example function to get all products
exports.getAllProducts = (req, res) => {
  connection.query('SELECT * FROM products', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(results);
  });
};
