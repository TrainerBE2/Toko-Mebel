import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import FreeShipping from "./FreeShipping.jsx";
import "./Navbar.css";
import {HashLink} from "react-router-hash-link"
import {NavLink} from "react-router-dom"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const NavbarPage = () => {
  const [isHidden, setIsHidden] = useState(false);
  const cartItems = useSelector((state) => state.cart.data || []);

  const totalItems = cartItems
    ? cartItems.reduce((total, item) => total + item.quantity, 0)
    : 0;
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <FreeShipping />
      <Navbar
        expand="lg"
        className={`position-fixed z-3 border-0 w-100 bg-white border-bottom ${
          isHidden ? "top-0" : "top-4"
        }`}
      >
        <Container>
          <HashLink
            smooth
            to="/home/#home"
            className="navbar-brand fw-bold fs-4 m-0 p-0 fm-1"
          >
            Toko<span className="text-warning">Mebel</span>
          </HashLink>
          <div className="ms-auto me-3 d-flex d-lg-none gap-3 align-items-center justify-content-center">
            <NavLink to="account" className="nav-link">
              <i className="ri-user-fill fs-6"></i>
            </NavLink>
            <NavLink to="cart" className="nav-link position-relative">
              <i className="ri-shopping-bag-fill fs-6"></i>
              <span className="indicator__cart">{totalItems}</span>
            </NavLink>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="mt-4 mt-lg-0">
            <Nav className="mx-auto text-center text-uppercase">
              <HashLink to="/home/#bestseller" className="nav-link">
                Best Seller
              </HashLink>
              <NavLink to="shop" className="nav-link">
                Shop
              </NavLink>
              <HashLink to="/home/#customize" className="nav-link">
                Customize
              </HashLink>
              <HashLink smooth to="/home/#recent" className="nav-link">
                Style Guide
              </HashLink>
            </Nav>
          </Navbar.Collapse>
          <div className="d-none d-lg-flex gap-3 align-items-center justify-content-center">
            <NavLink to="account" className="nav-link ms-auto">
              <i className="ri-user-fill fs-6"></i>
            </NavLink>
            <span>l</span>
            <NavLink
              to="cart"
              className="nav-link me-auto position-relative"
            >
              <i className="ri-shopping-bag-fill fs-6 me-1"></i>
              <span className="indicator__cart">{totalItems}</span>
            </NavLink>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarPage;
