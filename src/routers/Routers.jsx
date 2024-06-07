import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/HomePage.jsx";
import ShopPage from "../pages/ShopPage.jsx";
import AccountPage from "../pages/AccountPage.jsx";
import Cart from "../pages/Cart.jsx";
import DetailProduct from "../pages/DetailProduct.jsx";
import ProfilUser from "../pages/ProfilUser.jsx";
import "../Styles/index.css";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="home" />} />
      <Route path="home" element={<HomePage />} />
      <Route path="shop" element={<ShopPage />} />
      <Route path="shop/:id" element={<DetailProduct />} />
      <Route path="account" element={<AccountPage />} />
      <Route path="account/profile" element={<ProfilUser />} />
      <Route path="cart" element={<Cart />} />
    </Routes>
  );
};

export default Routers;
