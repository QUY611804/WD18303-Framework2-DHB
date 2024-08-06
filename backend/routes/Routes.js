const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const productController = require("../controllers/productController");
const categoryController = require("../controllers/categoryController");
const order_detailController = require("../controllers/order_detailController");
const orderController = require("../controllers/orderController");
// const authController = require("../controllers/authController");

//user
router.get("/users", userController.getAllUsers);
router.get("/login", userController.getAllUsers);
router.post("/login", userController.login);
router.post('/register', userController.register);
//products
router.get("/products", productController.getAllProducts);
router.get("/products_banchay", productController.bestSellProducts);
router.get("/products_noibat", productController.featuredProducts);
router.get("/products_khuyenmai", productController.sellProducts);
router.get("/products/:id", productController.GetOneProduct);

//categoris
router.get("/categories", categoryController.getAllcategoris);

//orders
router.get("/orders", orderController.getAllOrders);
router.post("/orders", orderController.PostOrders);

//orders_detail
router.get("/order_detail", order_detailController.getAllOrder_detail);

// Authentication


module.exports = router;
