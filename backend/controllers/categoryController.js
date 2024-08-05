const connection = require('../config/database');

// Example function to get all categoris
exports.getAllcategoris = (req, res) => {
  connection.query('SELECT * FROM categories', (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(results);
  });
};
