


const express = require("express");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const fs = require("fs");
const Routes = require("./routes/Routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//CORS là một tính năng bảo mật được trình duyệt web triển khai để hạn chế các trang web gửi yêu cầu đến một miền khác với miền đã phục vụ trang web
app.use(cors({
  origin: 'http://localhost:3001', //Điều này chỉ định nguồn gốc được phép (tức là tên miền mà các yêu cầu có thể được thực hiện đến máy chủ của bạn) 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],//Mảng này liệt kê các phương thức HTTP được phép khi thực hiện yêu cầu đến máy chủ của bạn từ nguồn gốc đã chỉ định
  allowedHeaders: ['Content-Type', 'Authorization']// yêu cầu được phép bao gồm tiêu Content-Typeđề (chỉ ra loại dữ liệu đang được gửi) và Authorizationtiêu đề (thường được sử dụng để gửi mã thông báo xác thực).
}));

// Phục vụ các tập tin tĩnh từ thư mục tải lên
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Cấu hình lưu trữ multer
const storage = multer.diskStorage({
  //Đây là hàm gọi lại được Multer sử dụng để xác định nơi các tệp đã tải lên sẽ được lưu trữ trên máy chủ.destination chức năng
    destination: (req, file, cb) => {
      const entity = req.params.entity || 'default'; // Lấy thực thể từ tham số URL, mặc định là 'default'
      const uploadPath = path.join(__dirname, "uploads", entity);//Điều này tạo ra một đường dẫn tệp nơi các tệp đã tải lên sẽ được lưu trữ.
      // Điều này kiểm tra xem thư mục được chỉ định bởi uploadPath đã tồn tại hay chưa.
      if (!fs.existsSync(uploadPath)) {
        // Nếu thư mục không tồn tại, dòng này sẽ tạo thư mục đó
        fs.mkdirSync(uploadPath, { recursive: true });
      }
      cb(null, uploadPath);
    },
  filename: (req, file, cb) => {

    const originalName = file.originalname;//file.originalname: Điều này trích xuất tên gốc của tệp khi người dùng tải lên
    const extension = path.extname(originalName);//path.extname(originalName): Điều này trích xuất phần mở rộng tệp từ tên tệp gốc. 
    const nameWithoutExt = path.basename(originalName, extension);//Điều này trích xuất tên của tệp mà không có phần mở rộng
    cb(null, `${nameWithoutExt}${extension}`); // 
  },
});

const upload = multer({ storage });

// Tuyến đường để xử lý việc tải lên tệp
app.post("/api/upload/:entity", upload.single("file"), (req, res) => {
  const file = req.file;
  if (!file) {
    return res.status(400).send({ error: "No file uploaded" });
  }
  res.json({ filePath: `${file.filename}` }); // Trả về đường dẫn tệp tin
});

// Use other routes
app.use('/api', Routes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
