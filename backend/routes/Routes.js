const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const productController = require("../controllers/productController");
const categoryController = require("../controllers/categoryController");
const order_detailController = require("../controllers/order_detailController");
const orderController = require("../controllers/orderController");


router.get("/users", userController.getAllUsers);
router.get("/products", productController.getAllProducts);
router.get("/categories", categoryController.getAllcategoris);
router.get("/orders", orderController.getAllOrders);
router.get("/order_detail", order_detailController.getAllOrder_detail);

module.exports = router;
