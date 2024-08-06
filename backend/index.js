const express = require('express');
const cors = require('cors');
const app = express();
const Routes = require('./routes/Routes');

app.use(cors({
  origin: 'http://localhost:3001', // Thay đổi nếu cần thiết
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json()); // Để xử lý JSON payload

// Sử dụng các route
app.use('/api', Routes);

// Khởi động máy chủ
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
