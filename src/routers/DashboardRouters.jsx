import {Routes, Route, Navigate} from "react-router-dom"
import Dashboard from "../pages/DashboardPage/Dashboard.jsx";
import Users from "../pages/DashboardPage/Users.jsx";
import Products from "../pages/DashboardPage/Products.jsx";
import FormProducts from "../pages/DashboardPage/Form/FormProducts.jsx";
import Category from "../pages/DashboardPage/Category.jsx";
import Customers from "../pages/DashboardPage/Customers.jsx";
import FormCustomers from "../pages/DashboardPage/Form/FormCustomers.jsx";
import Orders from "../pages/DashboardPage/Orders.jsx";


const DashboardRouters = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/users" element={<Users />} />

      <Route path="/products" element={<Products />} />
      <Route path="/products/add" element={<FormProducts />} />
      <Route path="/products/edit/:id" element={<FormProducts />} />

      <Route path="/category" element={<Category />} />

      <Route path="/customers" element={<Customers />} />
      <Route path="/customers/add" element={<FormCustomers />} />
      <Route path="/customers/edit/:id" element={<FormCustomers />} />

      <Route path="/orders" element={<Orders />} />
    </Routes>
  );
}

export default DashboardRouters