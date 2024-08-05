import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "../pages/admin/Dashboard";
import ProductsRoutes from "../pages/admin/products/router";
import UserRoutes from "../pages/admin/user/router";
import OrdersRoutes from "../pages/admin/orders/router"


const AdminRoutes = () => {
  return (
    <Routes>
   
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="products/*" element={<ProductsRoutes />} />
      <Route path="user/*" element={<UserRoutes />} />
      <Route path="orders/*" element={<OrdersRoutes />} />
      <Route path="/" element={<Navigate to="Dashboard" />} />
    </Routes>
  );
};

export default AdminRoutes;
