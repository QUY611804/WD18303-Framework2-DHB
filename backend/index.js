const express = require('express');
const app = express();
const Routes = require('./routes/Routes');

app.use(express.json()); // Để xử lý JSON payload

// Sử dụng các route
app.use('/api',Routes);

// Khởi động máy chủ
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
