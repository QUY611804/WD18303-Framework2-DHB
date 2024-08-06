const express = require("express");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const fs = require("fs");
const Routes = require("./routes/Routes");
const app = express();
app.use(express.json()); // Để xử lý JSON payload


app.use(cors({
  origin: 'http://localhost:3001', // Thay đổi nếu cần thiết
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));



// Sử dụng các route
app.use('/api', Routes);


app.use(express.urlencoded({ extended: true }));

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const entity = req.params.entity;
    const uploadPath = path.join(__dirname, "uploads", entity);
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now();
    const originalName = file.originalname;
    const extension = path.extname(originalName);
    cb(null, `${timestamp}${extension}`);
  },
});

const upload = multer({ storage });

app.post("/api/upload/:entity", upload.single("file"), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send({ error: "No file uploaded" });
  }
  res.json({ filePath: `uploads/${req.params.entity}/${file.filename}` });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
