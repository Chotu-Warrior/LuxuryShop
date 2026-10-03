import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Header from "./components/header";
// import Footer from "./components/footer";

import ProductSingle from "./pages/ProductSingle";
import Home from "./pages/Home";
import _404 from "./pages/404";
import About from "./pages/about";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import Contact from "./pages/contact";
import Dashboard from "./pages/dashboard";
import Faq from "./pages/faq";
import ForgotPassword from "./pages/forgot-password";
import Login from "./pages/login";
import Privacy from "./pages/privacy";
import RefundPolicy from "./pages/refund-policy";
import Register from "./pages/register";
import ResetPassword from "./pages/reset-password";
import Shop from "./pages/shop";
import Support from "./pages/support";
import Terms from "./pages/terms";

// Admin ROutes
import AdminUsers from "./Admin/admin-users";
import Categories from "./Admin/categories";
import Customers from "./Admin/customers";
import AdminDashboard from "./Admin/dashboard";
import EditProduct from "./Admin/edit-product";
import AdminForgotPassword from "./Admin/AdminForgotPassword";
import AdminLogin from "./Admin/Adminlogin";
import Orders from "./Admin/orders";
import Addproducts from "./Admin/Addproducts";
import Settings from "./Admin/settings";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/404" element={<_404 />} />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/product/:id" element={<ProductSingle />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/support" element={<Support />} />
        <Route path="/terms" element={<Terms />} />

        {/* Admin Routes */}
        <Route path="/admin/admin_users" element={<AdminUsers />} />
        <Route path="/admin/categories" element={<Categories />} />
        <Route path="/admin/customers" element={<Customers />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/Addproducts/edit/:id" element={<EditProduct />} />
        <Route path="/admin/forgot-password" element={<AdminForgotPassword />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/orders" element={<Orders />} />
        <Route path="/admin/Addproducts" element={<Addproducts />} />
        <Route path="/admin/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;