-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 06, 2024 at 01:17 PM
-- Server version: 8.0.36
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dong_ho_bee`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(1, 'Sản phẩm 1'),
(2, 'Electronics');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `phone` varchar(20) COLLATE utf8mb4_general_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `paymentMethod` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `name`, `phone`, `address`, `paymentMethod`, `date`) VALUES
(1, 'sdfgsdf', '41231312', 'sxdgfghdfhb', NULL, '2024-08-05 17:03:35'),
(2, 'dxfcgnvb', '213', 'fbcvnm', NULL, '2024-08-05 17:04:20'),
(3, 'sdfv', '544656166552', 'czxcxz', 'czxczc', '2024-08-06 10:25:31'),
(4, 'zxczxc', '3516515', 'zxczxczxc', 'nhận hàng', '2024-08-06 18:09:28'),
(5, 'zxczxc', '3516515', 'zxczxczxc', 'nhận hàng', '2024-08-06 18:10:29'),
(6, 'sdfgsdf', '41231312', 'sxdgfghdfhb', 'nhận hàng', '2024-08-06 18:29:51'),
(7, 'ngut tung', '0937564554', 'sd', 'cod', '2024-08-06 18:32:23'),
(8, 'ngut tung', '0937564554', 'sd', 'cod', '2024-08-06 18:32:29'),
(9, 'ngut tung', '0937564554', 'Sd', 'cod', '2024-08-06 18:32:33'),
(10, 'ngut tung', '0937564554', 'Thị xã Sa Đéc', 'cod', '2024-08-06 18:34:40'),
(11, 'ngut tung', '0937564554', 'Thị xã Sa Đéc', 'cod', '2024-08-06 18:34:44'),
(12, 'ngut tung', '0937564554', 'Thị xã Sa Đéc', 'cod', '2024-08-06 18:34:45'),
(13, 'ngut tung', '0937564554', 'Thị xã Sa Đéc', 'bank', '2024-08-06 18:34:50'),
(14, 'ngut tung', '0937564554', 'Thị xã Sa Đéc', 'cod', '2024-08-06 18:36:03'),
(15, 'ngut tung', '0937564554', 'Thị xã Sa Đéc', 'cod', '2024-08-06 18:36:04'),
(16, 'ngut tung', '0937564554', 'Thị xã Sa Đéc', 'cod', '2024-08-06 18:36:04'),
(17, 'ngut tung', '0937564554', 'Thị xã Sa Đéc', 'cod', '2024-08-06 18:36:05'),
(18, 'ngut tung', '0937564554', 'Thị xã Sa Đéc', 'cod', '2024-08-06 18:36:05'),
(19, 'ngut tung', '0937564554', 'Thị xã Sa Đéc', 'cod', '2024-08-06 18:36:05'),
(20, 'ngut tung', '0937564554', 'Thị xã Sa Đéc', 'cod', '2024-08-06 18:36:05'),
(21, 'ngut tung', '0937564554', 'Thị xã Sa Đéc', 'cod', '2024-08-06 18:36:05'),
(22, 'ngut tung', '0937564554', 'Thị xã Sa Đéc', 'cod', '2024-08-06 18:36:06'),
(23, 'ngut tung', '0937564554', 'Thị xã Sa Đéc', 'cod', '2024-08-06 18:36:06'),
(24, 'ngut tung', '0937564554', 'Thị xã Sa Đéc', 'cod', '2024-08-06 18:36:06'),
(25, 'ngut tung', '0937564554', 'Thị xã Sa Đéc', 'cod', '2024-08-06 18:36:06'),
(26, 'ngut tung', '0937564554', 'Thị xã Sa Đéc', 'cod', '2024-08-06 18:36:06'),
(27, 'ngut tung', '0937564554', 'Thị xã Sa Đéc', 'cod', '2024-08-06 18:36:15'),
(28, 'ngut tung', '0937564554', 'Thị xã Sa Đéc', 'cod', '2024-08-06 18:36:15'),
(29, 'ngut tung', '0937564554', 'Thị xã Sa Đéc', 'cod', '2024-08-06 18:36:15'),
(30, 'ngut tung', '0937564554', 'Thị xã Sa Đéc', 'cod', '2024-08-06 18:36:15'),
(31, 'ngut tung', '0937564554', 'Thị xã Sa Đéc', 'cod', '2024-08-06 18:36:15'),
(32, 'nguyen quan TUNG', '0965489623', 'ct', 'cod', '2024-08-06 18:37:33'),
(33, 'nguyen quan TUNG', '0965489623', 'ct', 'cod', '2024-08-06 18:37:34'),
(34, 'nguyen quan TUNG', '0965489623', 'ct', 'cod', '2024-08-06 18:37:34'),
(35, 'nguyen quan TUNG', '0965489623', 'ct', 'cod', '2024-08-06 18:37:34'),
(36, 'nguyen quan TUNG', '0965489623', 'ct', 'cod', '2024-08-06 18:37:34'),
(37, 'nguyen quan TUNG', '0965489623', 'ct', 'cod', '2024-08-06 18:37:34'),
(38, 'nguyen quan TUNG', '0965489623', 'ct', 'cod', '2024-08-06 18:37:34'),
(39, 'nguyen quan TUNG', '0965489623', 'ct', 'cod', '2024-08-06 18:37:35'),
(40, 'nguyen quan TUNG', '0965489623', 'ct', 'cod', '2024-08-06 18:37:35'),
(41, 'nguyen quan TUNG', '0965489623', 'ct', 'cod', '2024-08-06 18:37:35'),
(42, 'nguyen quan TUNG', '0965489623', 'ct', 'cod', '2024-08-06 18:37:45'),
(43, 'nguyen quan TUNG', '0965489623', 'ct', 'cod', '2024-08-06 18:37:45'),
(44, 'nguyen quan TUNG', '0965489623', 'ct', 'cod', '2024-08-06 18:37:45'),
(45, 'nguyen quan TUNG', '0965489623', 'ct', 'cod', '2024-08-06 18:37:46'),
(46, 'nguyen quan TUNG', '0965489623', 'ct', 'cod', '2024-08-06 18:37:46'),
(47, 'nguyen quan TUNG', '0965489623', 'ct', 'cod', '2024-08-06 18:37:46'),
(48, 'nguyen quan TUNG', '0965489623', 'ct', 'cod', '2024-08-06 18:37:46'),
(49, 'nguyen quan TUNG', '0965489623', 'ct', 'cod', '2024-08-06 18:37:46'),
(50, 'nguyen quan TUNG', '0965489623', 'ct', 'cod', '2024-08-06 18:37:47'),
(51, 'nguyen quan TUNG', '0965489623', 'ct', 'cod', '2024-08-06 18:37:47'),
(52, 'nguyen quan TUNG', '0965489623', 'ct', 'cod', '2024-08-06 18:37:47'),
(53, 'nguyen quan TUNG', '0965489623', 'ct', 'cod', '2024-08-06 18:37:47'),
(54, 'nguyen quan TUNG', '0965489623', 'ct', 'cod', '2024-08-06 18:37:48'),
(55, 'ngut tung', '0937564554', 'àafdsfdgf', 'cod', '2024-08-06 18:39:29'),
(56, 'sdfgsdf', '41231312', 'sxdgfghdfhb', 'nhận hàng', '2024-08-06 18:40:29'),
(57, 'ngut tung', '0937564554', 'àafdsfdgf', 'cod', '2024-08-06 18:40:59'),
(58, 'ngut tung', '0937564554', 'àafdsfdgf', 'cod', '2024-08-06 18:41:01'),
(59, 'ngut tung', '0937564554', 'àafdsfdgf', 'cod', '2024-08-06 18:41:10'),
(60, 'ngut tung', '0937564554', 'Thị xã Sa Đéc', 'cod', '2024-08-06 18:42:44'),
(61, 'ngut tung', '0937564554', 'Thị xã Sa Đéc', 'cod', '2024-08-06 18:43:26'),
(62, 'ngut tung123', '0937564554', 'Thị xã Sa Đéc', 'cod', '2024-08-06 18:45:36'),
(63, 'sdfgsdf', '41231312', 'sxdgfghdfhb', 'nhận hàng', '2024-08-06 18:46:50'),
(64, 'sdfgsdf', '41231312', 'sxdgfghdfhb', 'nhận hàng', '2024-08-06 18:47:21'),
(65, 'ngut tung123', '0937564554', 'Thị xã Sa Đéc', 'cod', '2024-08-06 18:47:53'),
(66, 'ngut tung123', '0937564554', 'Thị xã Sa Đéc', 'cod', '2024-08-06 18:48:11'),
(67, 'ngut tung123', '0937564554', 'sdsad', 'cod', '2024-08-06 19:00:04'),
(68, 'ngut tung123', '0937564554', 'cvbnm', 'cod', '2024-08-06 19:06:46'),
(69, 'nguyen quan TUNG', '0965489623', 'Thị xã Sa Đéc', 'cod', '2024-08-06 19:12:31'),
(70, 'nguyen quan TUNG', '0965489623', 'Sbcnvbn,m', 'cod', '2024-08-06 19:16:21'),
(71, 'nguyen quan TUNG', '0965489623', 'Thị xã Sa Đéc', 'cod', '2024-08-06 19:21:43'),
(72, 'nguyen quan TUNG', '0965489623', 'Thị xã Sa Đéc', 'cod', '2024-08-06 19:27:35'),
(73, 'nguyen quan TUNG', '0965489623', 'Thị xã Sa Đéc', 'cod', '2024-08-06 19:28:53'),
(74, 'nguyen quan TUNG', '0965489623', 'Thị xã Sa Đéc', 'cod', '2024-08-06 19:47:02'),
(75, 'nguyen quan TUNG', '0965489623', 'sdsad', 'cod', '2024-08-06 19:48:08'),
(76, 'nguyen quan TUNGas', '0965489623', 'ct', 'cod', '2024-08-06 19:48:30'),
(78, 'nguyen quan TUNGas', '0965489623', 'sd', 'cod', '2024-08-06 19:52:22');

-- --------------------------------------------------------

--
-- Table structure for table `order_detail`
--

CREATE TABLE `order_detail` (
  `id` int NOT NULL,
  `product_id` int NOT NULL,
  `user_id` int DEFAULT NULL,
  `order_id` int NOT NULL,
  `quantity` int DEFAULT NULL,
  `price` int DEFAULT NULL,
  `total` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `order_detail`
--

INSERT INTO `order_detail` (`id`, `product_id`, `user_id`, `order_id`, `quantity`, `price`, `total`) VALUES
(1, 5, 1, 2, NULL, NULL, NULL),
(2, 16, NULL, 67, 7, 13123, NULL),
(3, 16, NULL, 68, 8, 13123, NULL),
(4, 13, NULL, 69, 3, 123123, NULL),
(5, 18, NULL, 70, 4, 13123, NULL),
(6, 12, NULL, 71, 4, 123123, 492492.00),
(7, 12, NULL, 72, 4, 123123, 492492.00),
(8, 8, NULL, 73, 5, 123123, 615615.00),
(9, 8, NULL, 74, 12, 123123, 1477476.00),
(10, 12, NULL, 75, 3, 123123, 369369.00),
(11, 8, NULL, 76, 4, 123123, 492492.00),
(12, 17, NULL, 78, 4, 13123, 52492.00);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `price` int DEFAULT NULL,
  `sell_price` int DEFAULT NULL,
  `description` text COLLATE utf8mb4_general_ci,
  `status` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `category_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `image`, `price`, `sell_price`, `description`, `status`, `created_at`, `category_id`) VALUES
(1, 'sddvfbcn', 'dzfxcvbn', 123123123, 123123, 'dsxfhcgmn,', 'khuyến mãi', '2024-08-06 11:44:26', 1),
(5, 'szdfxvbc', 'ádfvbc', 12312, 123, 'dsfgdsg', 'zxczxc', '2024-08-06 11:44:26', 1),
(6, 'sdfv', 'sdxvc', 123123, 123, 'sadfv', 'khuyến mãi', '2024-08-06 11:44:26', 1),
(7, 'sdfv', 'sdxvc', 123123, 123, 'sadfv', 'khuyến mãi', '2024-08-06 11:44:26', 1),
(8, 'sdfv', 'sdxvc', 123123, 123, 'sadfv', 'khuyến mãi', '2024-08-06 11:44:26', 1),
(9, 'sdfv', 'sdxvc', 123123, 123, 'sadfv', 'khuyến mãi', '2024-08-06 11:44:26', 1),
(10, 'sdfv', 'sdxvc', 123123, 123, 'sadfv', 'bán chạy', '2024-08-06 11:44:26', 1),
(11, 'sdfv', 'sdxvc', 123123, 123, 'sadfv', 'bán chạy', '2024-08-06 11:44:26', 1),
(12, 'sdfv', 'sdxvc', 123123, 123, 'sadfv', 'bán chạy', '2024-08-06 11:44:26', 1),
(13, 'sdfv', 'sdxvc', 123123, 123, 'sadfv', 'bán chạy', '2024-08-06 11:44:26', 1),
(14, 'sadv', 'dxcv', 13123, 123, 'zXcvbnm', 'bán chạy', '2024-08-06 11:44:26', 1),
(15, 'sadv', 'dxcv', 13123, 123, 'zXcvbnm', 'nổi bật', '2024-08-06 11:44:26', 1),
(16, 'sadv', 'dxcv', 13123, 123, 'zXcvbnm', 'nổi bật', '2024-08-06 11:44:26', 1),
(17, 'sadv', 'dxcv', 13123, 123, 'zXcvbnm', 'nổi bật', '2024-08-06 11:44:26', 1),
(18, 'sadv', 'dxcv', 13123, 123, 'zXcvbnm', 'nổi bật', '2024-08-06 11:44:26', 1),
(19, 'sadv', 'dxcv', 13123, 123, 'zXcvbnm', 'nổi bật', '2024-08-06 11:44:26', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `phone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `username` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `role` varchar(50) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `image`, `phone`, `password`, `email`, `username`, `role`) VALUES
(1, 'Nguyen Van A', 'sdfsdf', '312313123', 'cxcvxcv', 'xfvxcv@gmail.com', '', NULL),
(2, 'dsfavxcx', 'xzCvdcx', '0231563415', '123456', 'tung@gmail.com', '', NULL),
(3, 'zdfsdf', 'sadasd', '12312', '123456', 'fsdfcvxnb@gmail.com', 'tung123', NULL),
(4, NULL, NULL, NULL, '$2b$10$TEPsf4VQ63qHFf5PZad2a.dErjNhuXLvobD1nkLGv/d.9UtChgMAS', 'longthan3332@gmail.com', 'tung1', NULL),
(5, NULL, NULL, NULL, '$2b$10$uSkwsfgOQYA05DYidR1FxOot0lEdflImdefuQKJQxaOtfYpXV7jr6', 'tung1234@gmail.com', 'tung2', NULL),
(6, NULL, NULL, NULL, '$2b$10$CduxVa1mD3hxBiO9ONfp4eHOr2Ag3hRRBjGblIU9QePbolq7F4W2C', 'tung1234@gmail.com', 'tung3', NULL),
(7, NULL, NULL, NULL, '$2b$10$KTlsQTKRaD6LGfjrYGXjpuIXDz1OiDd7qbJwQ6/tK69mo3qjc0E.C', 'longthan3331@gmail.com', 'tung6', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_detail`
--
ALTER TABLE `order_detail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `order_id` (`order_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `product_id` (`product_id`,`user_id`,`order_id`) USING BTREE;

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`) USING BTREE;

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- AUTO_INCREMENT for table `order_detail`
--
ALTER TABLE `order_detail`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `order_detail`
--
ALTER TABLE `order_detail`
  ADD CONSTRAINT `order_detail_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `order_detail_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `order_detail_ibfk_3` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
