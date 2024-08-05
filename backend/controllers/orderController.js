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
